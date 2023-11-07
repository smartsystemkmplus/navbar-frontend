/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import {
  Button,
  Checkbox,
  Input,
  Loader,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import AccessibleOnClick from "../AccessibleOnClick";

const SelectDropdown = forwardRef(
  (
    {
      label,
      placeholder,
      data,
      onChange,
      onSearchChange,
      value,
      size = "sm",
      isLoading = false,
      isFetching = false,
      multiple = false,
      classNames = { dropdown: "", select: {} },
    },
    ref,
  ) => {
    const [temp, setTemp] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState(undefined);
    const [dropdownHeight, setDropdownHeight] = useState(0);
    const mappedData = useMemo(() => {
      if (data) {
        return data?.pages?.map((p) => p.map((d) => d)).flat();
      }
      return [];
    }, [data, isLoading, isFetching]);

    const rootRef = useClickOutside(() => setIsOpen(false));
    const dropdownRef = useRef(null);

    useEffect(() => {
      if (dropdownRef?.current?.clientHeight > 0) {
        setDropdownHeight(dropdownRef?.current?.clientHeight);
      }
    }, [isOpen]);

    const handleAddSelected = (v) => {
      if (multiple) {
        const exist = temp.some((d) => d === v.value);
        let newData;
        if (exist) {
          newData = temp.filter((d) => d !== v.value);
        } else {
          newData = [...temp, v.value];
        }
        setTemp(newData);
        onChange(newData);
      } else {
        onChange(v);
      }
    };

    useEffect(() => {
      if (!isOpen) {
        setTemp(value);
      }
    }, [isOpen]);

    return (
      <div
        ref={rootRef}
        className="relative"
        style={{
          marginBottom: isOpen ? dropdownHeight : 0,
        }}
      >
        <Input.Wrapper size={size} onClick={() => setIsOpen(!isOpen)}>
          <MultiSelect
            readOnly
            placeholder={placeholder}
            value={value || []}
            data={mappedData || []}
            size={size}
            rightSection={
              <Icon
                icon={
                  isOpen
                    ? "akar-icons:chevron-up"
                    : "akar-icons:chevron-down"
                }
                width={12}
              />
            }
            classNames={{
              ...classNames.select,
            }}
            styles={{
              input: {
                cursor: "pointer",
              },
              rightSection: { pointerEvents: "none" },
            }}
            onClick={() => {}}
          />
        </Input.Wrapper>

        <div
          ref={dropdownRef}
          className={`${
            isOpen ? "block h-fit max-h-[400px]" : "hidden max-h-0"
          } absolute z-[1] bg-white rounded-md shadow p-5 mt-2 ${
            classNames.dropdown
          }`}
        >
          <div className="flex justify-between gap-2 items-center border-b pb-2">
            <TextInput
              label={label}
              type="search"
              className="w-full my-1.5"
              classNames={{ rightSection: "pr-1.5" }}
              placeholder="Cari"
              value={query || ""}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={() => onSearchChange(query)}>
              Search
            </Button>
          </div>
          <div
            ref={ref}
            className="w-full max-h-[18rem] mr-2 overflow-y-auto scroll-style-2"
          >
            {(() => {
              if (isLoading) {
                return (
                  <div className="flex justify-center items-center h-[7rem]">
                    <Loader />
                  </div>
                );
              }

              // if (!value?.length) {
              //   return (
              //     <div className="flex justify-center items-center h-[7rem] text-darkGrey">
              //       <span>Search</span>
              //     </div>
              //   );
              // }

              if (mappedData?.length > 0) {
                return (
                  <ul className="flex flex-col">
                    {mappedData?.map((v) => {
                      return (
                        <li
                          key={v.value}
                          className="flex gap-4 items-center my-3"
                        >
                          {multiple ? (
                            <Checkbox
                              label={
                                <div className="flex gap-1 items-center">
                                  <h1 className="pl-2 text-sm">
                                    {v.label}
                                  </h1>
                                </div>
                              }
                              value={v.value}
                              color="#016DB2"
                              size="xs"
                              classNames={{
                                label: "cursor-pointer",
                                input: "cursor-pointer",
                                body: "flex items-center",
                              }}
                              checked={temp.some(
                                (d) => d === v.value,
                              )}
                              onChange={() => handleAddSelected(v)}
                            />
                          ) : (
                            <AccessibleOnClick
                              onClick={() => handleAddSelected(v)}
                              className="flex gap-1 items-center"
                            >
                              <h1 className="pl-2 text-sm">
                                {v.label}
                              </h1>
                            </AccessibleOnClick>
                          )}
                        </li>
                      );
                    })}

                    {isFetching ? (
                      <div className="flex justify-center items-center h-[3rem]">
                        <Loader size="sm" />
                      </div>
                    ) : null}
                  </ul>
                );
              }

              if (multiple && value.length > 0) {
                return (
                  <ul className="flex flex-col">
                    {value.map((v) => {
                      return (
                        <li
                          key={v.value}
                          className="flex gap-4 items-center my-3"
                        >
                          {multiple ? (
                            <Checkbox
                              label={
                                <div className="flex gap-1 items-center">
                                  <h1 className="pl-2 text-sm">
                                    {v.label}
                                  </h1>
                                </div>
                              }
                              value={v.value}
                              color="#016DB2"
                              size="xs"
                              classNames={{
                                label: "cursor-pointer",
                                input: "cursor-pointer",
                                body: "flex items-center",
                              }}
                              checked={temp.some(
                                (d) => d === v.value,
                              )}
                              onChange={() => handleAddSelected(v)}
                            />
                          ) : (
                            <AccessibleOnClick
                              onClick={() => handleAddSelected(v)}
                              className="flex gap-1 items-center"
                            >
                              <h1 className="pl-2 text-sm">
                                {v.label}
                              </h1>
                            </AccessibleOnClick>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              return (
                <div className="flex justify-center items-center h-[7rem] text-darkGrey">
                  <span>Not found</span>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    );
  },
);
export default SelectDropdown;
