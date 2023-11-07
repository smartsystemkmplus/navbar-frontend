import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

export default function Explore({ width }) {
  return <Icon icon="carbon:explore" color="#016DB2" width={width} />;
}

Explore.propTypes = {
  width: PropTypes.number.isRequired,
};
