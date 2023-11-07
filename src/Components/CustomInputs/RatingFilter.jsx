import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

export default function RatingFilter({ value, onChange }) {
  const handleClick = (rating) => {
    if (value === rating) {
      onChange(null);
    } else {
      onChange(rating);
    }
  };
  return (
    <div className="flex gap-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          type="button"
          className={`flex gap-1 items-center rounded px-2 py-1 ${
            value === i + 1
              ? "text-primary3 bg-primary1 border border-primary3"
              : "bg-bg3 border border-bg3"
          }`}
          onClick={() => handleClick(i + 1)}
        >
          <Icon
            icon="ant-design:star-filled"
            className="text-yellow-500"
          />
          <p>{i + 1}</p>
        </button>
      ))}
    </div>
  );
}

RatingFilter.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

RatingFilter.defaultProps = {
  value: null,
  onChange: () => {},
};
