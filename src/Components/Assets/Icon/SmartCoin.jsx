import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

export default function SmartCoin({ width }) {
  return (
    <Icon icon="healthicons:coins" width={width} color="#016DB2" />
  );
}

SmartCoin.propTypes = {
  width: PropTypes.number,
};

SmartCoin.defaultProps = {
  width: 15,
};
