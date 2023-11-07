import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

export default function PrivateRoute({ isAuthorized }) {
  if (!isAuthorized) {
    window.location.href = import.meta.env.VITE_SSO_URL;
    return null;
  }

  return <Outlet />;
}

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};
