import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

export const getClearableProps = (
  value,
  onClear,
  variant = "search",
) => ({
  rightSection: (
    <ClearSearchTextInputMantine
      value={value}
      onClear={onClear}
      variant={variant}
    />
  ),
  styles: {
    rightSection: { pointerEvents: !value ? "none" : undefined },
  },
});

export default function ClearSearchTextInputMantine({
  value,
  onClear,
  variant = "search",
}) {
  const iconProp = {
    search: { icon: "akar-icons:search", color: "#003F80" },
    select: { icon: "akar-icons:chevron-down" },
    date: {
      icon: "ic:round-date-range",
      color: "#C1C7CD",
      width: 20,
    },
    none: {},
  };

  if (
    !value ||
    (Array.isArray(value) && !value?.[0] && !value?.[1])
  ) {
    if (variant === "none") return null;
    return (
      <Icon
        icon={iconProp[variant]?.icon}
        width={iconProp[variant]?.width || 12}
        color={iconProp[variant]?.color}
      />
    );
  }

  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={onClear}
    >
      <Icon icon="bi:x" width={20} color="#868e96" />
    </button>
  );
}

ClearSearchTextInputMantine.propTypes = {
  value: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

ClearSearchTextInputMantine.defaultProps = {
  variant: "search",
};
