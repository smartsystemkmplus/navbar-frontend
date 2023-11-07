import { Icon } from "@iconify/react";
import { clsx } from "@mantine/core";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { color } from "../../Utils/Constants";

function BadgeCalendar({
  variant = "primary",
  value,
  customTextClasses,
}) {
  const classNames = useMemo(() => {
    let classes = "";
    let colorIcon = "";
    switch (variant) {
      case "primary":
        classes = "bg-[#C9F3FB] text-[#016DB2] border-[#016DB2]";
        colorIcon = "#016DB2";
        break;
      case "green":
        classes = "bg-[#F4FBF4] text-[#4BB543]  border-[#B8E3B5]";
        colorIcon = "#4BB543";
        break;
      case "yellow":
        colorIcon = "#F5BB5C";
        classes = "bg-[#FEF9F1] text-[#F5BB5C] border-[#F9D79F]";
        break;
      case "red":
        colorIcon = "#CB3A31";
        classes = "bg-[#FFF4F2] text-[#CB3A31] border-[#EEB4B0]";
        break;
      case "purple":
        colorIcon = "#3267E3";
        classes = "bg-[#F0F3FF] text-[#3267E3] border-[#B1C5F6]";
        break;
      case "gray":
        colorIcon = color.darkGrey;
        classes = "bg-[#F2F4F8] text-darkGrey border-darkGrey";
        break;
      default:
        colorIcon = "#016DB2";
        classes = "bg-[#C9F3FB] text-[#016DB2] border-[#016DB2]";
    }

    return { classes, colorIcon };
  }, [variant]);

  return (
    <div
      className={clsx(
        "rounded w-full p-1 flex border flex-row gap-1 items-center",
        classNames.classes,
        customTextClasses,
      )}
    >
      <div className="w-fit">
        <Icon
          icon="mdi:warning-circle"
          fontSize={16}
          color={classNames.colorIcon}
        />
      </div>
      <div className="font-semibold truncate text-sm">{value}</div>
    </div>
  );
}

BadgeCalendar.propTypes = {
  variant: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default BadgeCalendar;
