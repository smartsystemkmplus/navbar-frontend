/* eslint-disable react/jsx-props-no-spreading */
import { Icon } from "@iconify/react";
import { Input, Overlay, Popover } from "@mantine/core";
import { Calendar, DatePicker } from "@mantine/dates";
import { useClickOutside } from "@mantine/hooks";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function CustomDateRange({
  value,
  onChange,
  disabled,
  error,
  label,
  startLabel,
  endLabel,
  placeholder,
  startPlaceholder,
  endPlaceholder,
}) {
  const [open, setOpen] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [tempValue, setTempValue] = useState(value);

  const dropdownRef = useClickOutside(() => setOpen(false));

  const displayValue = useMemo(() => {
    if (!tempValue.from || !tempValue.to) {
      return null;
    }
    return `${
      tempValue.from
        ? dayjs(tempValue.from).format("DD MMM YYYY")
        : ""
    } - ${
      tempValue.to ? dayjs(tempValue.to).format("DD MMM YYYY") : ""
    }`;
  }, [tempValue]);

  const getCalendarValue = () => {
    if (activeInput === "from") {
      return tempValue.from;
    }
    if (activeInput === "to") {
      return tempValue.to;
    }
    return null;
  };

  const handleChange = useCallback(
    (value) => {
      setTempValue((prev) => ({
        ...prev,
        [activeInput]: value,
      }));
    },
    [activeInput],
  );

  useEffect(() => {
    if (tempValue.to && tempValue.from) {
      onChange(tempValue);
    }
  }, [tempValue]);

  const getMaxMinDate = () => {
    const maxDate = activeInput === "from" ? tempValue.to : null;
    const minDate = activeInput === "to" ? tempValue.from : null;
    return { maxDate, minDate };
  };

  useEffect(() => {
    if (!open) {
      setActiveInput(null);
    }
  }, [open]);

  return (
    <>
      <Popover opened={open} onChange={disabled ? () => {} : setOpen}>
        <Popover.Target>
          <Input.Wrapper
            label={label}
            // classNames={{ label: classNames?.label || "" }}
            error={error || ""}
          >
            <Input
              //   {...mantineProps}
              readOnly
              placeholder={placeholder}
              value={displayValue}
              onClick={disabled ? () => {} : () => setOpen(!open)}
              rightSection={
                <Icon icon="akar-icons:chevron-down" width={12} />
              }
              styles={{
                input: { cursor: "pointer" },
                rightSection: { pointerEvents: "none" },
              }}
            />
          </Input.Wrapper>
        </Popover.Target>
        <Popover.Dropdown>
          {/* {open && ( */}
          <div
            // ref={dropdownRef}
            className="bg-white w-fit flex flex-col gap-3"
          >
            <DatePicker
              label={startLabel}
              placeholder={startPlaceholder}
              readOnly
              onClick={() => setActiveInput("from")}
              value={tempValue.from}
            />
            <DatePicker
              label={endLabel}
              placeholder={endPlaceholder}
              readOnly
              onClick={() => setActiveInput("to")}
              value={tempValue.to}
            />
            <div className="relative">
              {activeInput === null && <Overlay opacity={0.6} />}
              <Calendar
                value={getCalendarValue()}
                onChange={handleChange}
                {...getMaxMinDate()}
                classNames={{ calendarBase: "border-t" }}
              />
            </div>
          </div>
          {/* )} */}
        </Popover.Dropdown>
      </Popover>

      {/* DATE DROPDOWN */}
    </>
  );
}

CustomDateRange.propTypes = {
  value: PropTypes.shape({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  startLabel: PropTypes.string,
  endLabel: PropTypes.string,
  placeholder: PropTypes.string,
  startPlaceholder: PropTypes.string,
  endPlaceholder: PropTypes.string,
};

CustomDateRange.defaultProps = {
  value: {
    from: null,
    to: null,
  },
  onChange: () => {},
  disabled: false,
  error: "",
  label: "",
  startLabel: "Start Date",
  endLabel: "End Date",
  placeholder: "",
  startPlaceholder: "Pilih tanggal",
  endPlaceholder: "Pilih tanggal",
};
