import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

export default function LearningPoint({ size }) {
  return (
    <div
      className="rounded p-1 bg-gradient-to-b from-gray-800 to-primary3"
      //   style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Icon
        icon="carbon:machine-learning-model"
        width={size}
        color="#fff"
      />
    </div>
  );
}

LearningPoint.propTypes = {
  size: PropTypes.number,
};

LearningPoint.defaultProps = {
  size: 20,
};
