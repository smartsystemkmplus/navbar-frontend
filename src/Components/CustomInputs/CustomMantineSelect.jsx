/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Button,
  Checkbox,
  Input,
  Loader,
  Radio,
  clsx,
} from "@mantine/core";
import { useClickOutside, useElementSize } from "@mantine/hooks";
import _ from "lodash";
import {
  createElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MANTINE_INPUT_STYLES } from "../../Utils/Constants";
import trimString from "../../Utils/Helpers/trimString";

export const getProp = (v, field) => {
  if (typeof v === "object" && v !== null) {
    if (field === "label") {
      if (isValidElement(v?.label)) {
        return v?.label;
      }
      return `${v?.label}`;
    }
    return v[field];
  }
  return v;
};

export function SelectedValue({
  value,
  handleRemove,
  disableRemove,
  labelComponent,
}) {
  return (
    <div className="flex items-center justify-between gap-2 py-1 pl-4 pr-2 border rounded border-grey2">
      {labelComponent ? (
        createElement(labelComponent, { ...value })
      ) : (
        <p className="text-sm text-darkGrey">
          {!!getProp(value, "label") &&
            trimString(getProp(value, "label"), 32)}
        </p>
      )}
      {!disableRemove && (
        <ActionIcon
          variant="transparent"
          onClick={() => handleRemove(value)}
        >
          <Icon icon="bi:x" width={25} className="text-grey2" />
        </ActionIcon>
      )}
    </div>
  );
}

/**
 * Simple documentations for CustomMantineSelect
 * @param {Object} props
 * @param {boolean} props.renderValueOutside - render selected value outside of the component
 * @param {boolean} props.multiple - allow multiple selection
 * @param {boolean} props.searchLoading - state when loading first time
 * @param {boolean} props.searchFetching - state when fetching next page (currently unused)
 * @param {any} props.value - selected value
 * @param {string} props.valueKey - valueKey is used to determine the source of the selected item
 * @param {(value, action, objects) => {}} props.onChange - (value, action, objects) => {}, action: add, remove
 *
 *
 * Example:
 * src/Modules/DevelopmentPlan/Components/CMCForum/Messaging/ModalAttachCourse.jsx
 *
 */

const CustomMantineSelect = forwardRef(
  (
    {
      renderValueOutside,
      multiple,
      searchLoading, // state when loading first time
      searchFetching, // state when fetching next page (currently unused)
      value,
      valueKey, // valueKey is used to determine the source of the selected item
      onChange, // (value, action, objects) => {}, action: add, remove
      onBlur,
      classNames,
      data,
      disabled,
      label,
      placeholder,
      size = "base",
      searchable,
      searchValue,
      onSearchChange,
      itemComponent,
      valueComponent,
      error,
      description,
      inputWrapperOrder,
      allowRemoveOnDisabled = false,
      alwaysOpen = false,
      createNewItemLabel = "Create new",
      canCreateNewItem = false,
      icon = null,
      rightSection = null,
      onCreateNewItem = () => null,
      customRenderer = null,
      emptyLabel = "Item tidak ditemukan.",
      isPopover = false,
      withCount = false,
      withRadio = false, // only for single select
      searchByFetchOnly = false,
    },
    ref,
  ) => {
    const { ref: inputRef, width } = useElementSize();
    const [open, setOpen] = useState(alwaysOpen);

    const processedValue = (() => {
      if (multiple) {
        return value?.map((v) => {
          const found = data?.find((d) => d.value === v);
          return found || v;
        });
      }
      return data?.find((d) => d.value === value) || value;
    })();
    const [tempSelected, setTempSelected] = useState(processedValue);

    const getValueOnly = (values) => {
      if (multiple) {
        return (
          Array?.isArray(values) && values?.length ? values : []
        )?.map((v) => getProp(v, "value"));
      }
      return [getProp(values, "value")];
    };

    useEffect(() => {
      const valueOnlyTempSelected = getValueOnly(tempSelected);
      const valueOnlyProcessed = getValueOnly(processedValue);
      if (!_.isEqual(valueOnlyTempSelected, valueOnlyProcessed)) {
        setTempSelected(processedValue);
      }

      // const valueOnlyTempSelected = getValueOnly(tempSelected);
      // const valueOnlyProcessed = getValueOnly(processedValue);

      // if (
      //   !!valueOnlyTempSelected &&
      //   !_.isEqual(valueOnlyTempSelected, valueOnlyProcessed)
      // ) {
      //   setOpen(false);
      //   setTempSelected(multiple ? [] : null);
      // }
    }, [tempSelected, processedValue]);

    const handleRemoveValue = (currValue) => {
      const tmpCurrValue =
        typeof currValue === "object"
          ? { ...currValue, src: valueKey }
          : { label: currValue, value: currValue, src: valueKey };
      if (multiple) {
        const newTempSelected = tempSelected?.filter(
          (v) =>
            getProp(v, "value") !== getProp(tmpCurrValue, "value"),
        );
        onChange(
          value?.filter((v) => v !== getProp(tmpCurrValue, "value")),
          "remove",
          newTempSelected,
        );
        setTempSelected(newTempSelected);
      } else {
        onChange(null, "replace");
        setTempSelected(null);
      }
    };

    const handleChange = (currValue, checked) => {
      const tmpCurrValue =
        typeof currValue === "object"
          ? { ...currValue, src: valueKey }
          : { label: currValue, value: currValue, src: valueKey };
      if (multiple) {
        if (checked) {
          const newTempSelected = [
            ...(tempSelected || []),
            tmpCurrValue,
          ];
          onChange(
            [...(value || []), getProp(tmpCurrValue, "value")],
            "add",
            newTempSelected,
          );
          setTempSelected(newTempSelected);
        } else {
          const filteredValue = value.filter(
            (v) => v !== getProp(tmpCurrValue, "value"),
          );
          const newTempSelected = (tempSelected || []).filter(
            (v) =>
              getProp(v, "value") !== getProp(tmpCurrValue, "value"),
          );
          onChange(filteredValue, "remove", newTempSelected);
          setTempSelected(newTempSelected);
        }
      } else {
        if (!withRadio) setOpen(false);
        onChange(
          getProp(tmpCurrValue, "value"),
          "replace",
          tmpCurrValue,
        );
        setTempSelected(tmpCurrValue);
      }
    };

    const handleSearchChange = (e) => {
      if (!open) {
        setOpen(true);
      }
      onSearchChange(e);
    };

    const tempData = useMemo(() => {
      if (searchLoading) {
        return [];
      }
      if (!searchByFetchOnly && searchValue && !!data?.length) {
        return data?.filter((v) =>
          getProp(v, "label")
            ?.toLowerCase()
            ?.includes(searchValue?.toLowerCase()),
        );
      }
      return data;
    }, [data, searchValue, searchLoading]);

    const isSelected = useCallback(
      (currValue) => {
        if (!multiple) {
          return (
            getProp(tempSelected, "value") ===
            getProp(currValue, "value")
          );
        }
        const valueOnlyTempSelected = getValueOnly(tempSelected);
        return valueOnlyTempSelected?.includes(
          getProp(currValue, "value"),
        );
      },
      [tempSelected, multiple],
    );

    const valueExist = useMemo(() => {
      if (!searchValue || !data || !tempSelected) return null;
      if (!multiple) {
        return !!data?.find((d) =>
          d.label?.toLowerCase().includes(searchValue?.toLowerCase()),
        );
      }
      return (
        !!data?.find((d) =>
          d.label?.toLowerCase().includes(searchValue?.toLowerCase()),
        ) ||
        !!tempSelected?.find((d) =>
          d.label?.toLowerCase().includes(searchValue?.toLowerCase()),
        )
      );
    }, [data, tempSelected, searchValue]);

    const getInputRightSide = () => {
      if (searchLoading) {
        return <Loader size="sm" />;
      }
      return (
        <Icon
          icon={
            searchable ? "ic:round-search" : "akar-icons:chevron-down"
          }
          width={searchable ? 20 : 12}
          color="#878D96"
        />
      );
    };

    useEffect(() => {
      if (disabled) {
        setOpen(false);
        setTempSelected(null);
      }
    }, [disabled]);

    const renderItem = useCallback((item) => {
      if (itemComponent) {
        return createElement(itemComponent, { ...item });
      }
      return (
        <p className="w-full cursor-pointer text-start">
          {getProp(item, "label")}
        </p>
      );
    });

    const renderValueItem = useCallback((item) => {
      return (
        <SelectedValue
          key={getProp(item, "value")}
          value={item}
          handleRemove={handleRemoveValue}
          disableRemove={allowRemoveOnDisabled ? false : disabled}
          labelComponent={valueComponent}
        />
      );
    });

    const getTextValue = useCallback(() => {
      if (multiple) return null;
      if (tempSelected) return tempSelected.label;
      if (searchValue) return null;
      return "";
    }, [tempSelected, searchValue, multiple]);

    const rootRef = useClickOutside(() =>
      alwaysOpen ? () => {} : setOpen(false),
    );

    const [focused, setFocused] = useState(false);
    const buttonHeight = useMemo(() => {
      if (size === "xs") return 26;
      if (size === "sm") return 34;
      if (size === "base") return 36;
      if (size === "md") return 42;
      if (size === "lg") return 50;
      if (size === "xl") return 58;
      return 36;
    }, [size]);

    return (
      <div
        ref={rootRef}
        className={clsx(
          "relative flex flex-col gap-2",
          classNames?.root,
        )}
      >
        <Input.Wrapper
          ref={inputRef}
          label={label}
          classNames={{
            label: classNames?.label || "",
            error: "mt-2",
          }}
          error={error || ""}
          description={description}
          size={size}
          inputWrapperOrder={inputWrapperOrder}
        >
          <button
            type="button"
            style={{
              height: buttonHeight,
              fontSize:
                MANTINE_INPUT_STYLES.primary.styles.input.fontSize,
            }}
            className={clsx(
              "flex justify-between items-center w-full border-[1.75px] rounded text-start text-sm",
              "transition-all delay-[10m]",
              !disabled && focused
                ? "border-primary3"
                : "border-gray-300",
              icon ? "pl-1.5 pr-3" : "px-3",
              !disabled && searchable && "cursor-text",
              !disabled && !searchable && "cursor-pointer",
              disabled && "cursor-not-allowed bg-gray-100",
              classNames?.input,
            )}
            onClick={
              disabled
                ? () => {}
                : () => setOpen(alwaysOpen ? true : !open)
            }
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            {icon && <div className="pr-2.5">{icon}</div>}
            {!searchable ? (
              <p
                className={clsx(
                  (!value || !value?.length) && "text-gray-400/80",
                )}
              >
                {value && !multiple ? getTextValue() : placeholder}
              </p>
            ) : (
              <Input
                variant="unstyled"
                size={size}
                aria-label="search-input"
                disabled={disabled}
                className="w-full placeholder:text-gray-400/80"
                placeholder={placeholder}
                value={getTextValue()}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={(e) => {
                  setFocused(false);
                  onBlur?.(e);
                }}
                onKeyDown={(e) => {
                  if (!multiple && e.key === "Backspace") {
                    if (tempSelected) {
                      handleRemoveValue(tempSelected);
                    }
                  }
                }}
              />
            )}
            <div
              className={clsx(
                "flex p-1",
                !searchable ? "pointer-events-none" : "",
                withCount && "w-fit",
              )}
            >
              {withCount && !!tempSelected?.length && (
                <div className="flex items-center justify-center bg-primary3 cursor-default rounded-full min-w-[1.25rem] w-fit h-5 mr-2">
                  <p className="text-sm text-white">
                    {tempSelected?.length}
                  </p>
                </div>
              )}
              {rightSection || getInputRightSide()}
            </div>
          </button>
          {/* <Input
            {...mantineProps}
            // value={renderValueOutside ? null : tempSelected}
            value={getTextValue()}
            readOnly={!searchable}
            onClick={
              disabled
                ? () => {}
                : () => setOpen(alwaysOpen ? true : !open)
            }
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyDown={(e) => {
              if (!multiple && e.key === "Backspace") {
                if (tempSelected) {
                  handleRemoveValue(tempSelected);
                }
              }
            }}
            classNames={{
              placeholder: classNames?.placeholder || "",
              input: !searchable ? "cursor-pointer" : "",
              rightSection: clsx(
                !searchable ? "pointer-events-none" : "",
                withCount && "w-fit px-3",
              ),
            }}
            icon={icon}
            rightSection={
              <>
                {withCount && !!tempSelected?.length && (
                  <div className="flex items-center justify-center bg-primary3 cursor-default rounded-full min-w-[1.25rem] w-fit h-5 p-1 mr-2">
                    <p className="text-sm text-white">
                      {tempSelected?.length}
                    </p>
                  </div>
                )}
                {rightSection || getInputRightSide()}
              </>
            }
          /> */}
        </Input.Wrapper>

        {/* ITEM DROPDOWN */}
        <div
          ref={ref}
          style={{ width, maxHeight: "200px" }}
          className={clsx(
            "bg-white flex flex-col rounded border overflow-y-auto scroll-style-3",
            !(open && !searchLoading) && "hidden",
            isPopover && "absolute z-10 top-10",
            classNames?.dropdown,
          )}
        >
          {!!data?.length &&
            !!tempData?.length &&
            tempData.map((v) => (
              <button
                key={getProp(v, "value")}
                type="button"
                className={clsx(
                  "flex justify-between gap-2 items-center hover:bg-bg2 py-2 px-4",
                  isSelected(v) &&
                    "bg-primary1 text-primary3 hover:bg-primary1",
                  classNames?.dropdownItem,
                )}
                onClick={() => handleChange(v, !isSelected(v))}
              >
                {renderItem(v)}
                {!multiple && withRadio && (
                  <Radio
                    classNames={{ input: "cursor-pointer" }}
                    onChange={(e) => {
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      handleChange(v, e.currentTarget.checked);
                    }}
                    checked={isSelected(v)}
                  />
                )}
                {multiple && (
                  <Checkbox
                    classNames={{ input: "cursor-pointer" }}
                    onChange={(e) => {
                      e.stopPropagation();
                      e.stopImmediatePropagation();
                      handleChange(v, e.currentTarget.checked);
                    }}
                    checked={isSelected(v)}
                  />
                )}
              </button>
            ))}

          {canCreateNewItem && !valueExist && (
            <Button
              variant="white"
              className="w-fit text-grey2"
              onClick={() => {
                onCreateNewItem(searchValue);
                onSearchChange("");
              }}
              leftIcon={<Icon icon="ic:baseline-add" width={20} />}
            >
              {createNewItemLabel}
            </Button>
          )}

          {!canCreateNewItem &&
            !valueExist &&
            (!data?.length || !tempData?.length) && (
              <p className="py-5 text-center text-grey2">
                {emptyLabel}
              </p>
            )}

          {searchFetching && (
            <Loader size="sm" className="mx-auto my-1 shrink-0" />
          )}
        </div>

        {/* SELECTED VALUE */}
        {/* Will only rendered if renderValueOutside is true */}
        {(() => {
          if (
            renderValueOutside &&
            (!!tempSelected || !!tempSelected?.length)
          ) {
            return (
              <div className="flex flex-wrap items-center gap-2">
                {multiple
                  ? tempSelected?.map((v) => renderValueItem(v))
                  : renderValueItem(tempSelected)}
              </div>
            );
          }
          return null;
        })()}

        {/* CUSTOM RENDERER OF SELECTED VALUE */}
        {/* Will only rendered if customRenderer is true */}
        {typeof customRenderer === "function" &&
          customRenderer(tempSelected, (val) => {
            if (multiple) {
              return handleRemoveValue(val);
            }
            return handleRemoveValue(tempSelected);
          })}
      </div>
    );
  },
);

export default CustomMantineSelect;
