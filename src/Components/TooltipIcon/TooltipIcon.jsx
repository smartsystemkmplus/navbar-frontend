import { Icon } from "@iconify/react";
import { Tooltip, clsx } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";

export default function TooltipIcon({
  label,
  variant,
  color,
  labelColor,
  labelWidth,
  position,
  iconSize,
  disableHover,
  onClick = () => {},
  classNames = {
    icon: "",
    tooltip: "",
  },
}) {
  const icon = {
    question: "ph:question-bold",
    info: "material-symbols:info-outline",
    "info-filled": "material-symbols:info",
  };
  return (
    <Tooltip
      label={label}
      withArrow
      multiline
      width={labelWidth || "auto"}
      color={labelColor}
      position={position}
      styles={{
        tooltip: {
          maxWidth: "400px",
        },
      }}
      disabled={disableHover}
      onClick={onClick}
      classNames={{
        tooltip: clsx("whitespace-normal", classNames.tooltip),
      }}
    >
      <Icon
        icon={icon[variant]}
        color={color}
        width={iconSize}
        className={classNames.icon}
      />
    </Tooltip>
  );
}

TooltipIcon.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  labelColor: PropTypes.string,
  labelWidth: PropTypes.string,
  position: PropTypes.string,
  iconSize: PropTypes.number,
  disableHover: PropTypes.bool,
  onClick: PropTypes.func,
  classNames: PropTypes.shape({
    icon: PropTypes.string,
    tooltip: PropTypes.string,
  }),
};

TooltipIcon.defaultProps = {
  variant: "question",
  color: "#016DB2",
  labelColor: null,
  labelWidth: "auto",
  position: "top",
  iconSize: 20,
  disableHover: false,
  onClick: () => {},
  classNames: {
    icon: "",
    tooltip: "",
  },
};
