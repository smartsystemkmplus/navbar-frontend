// PrivateRoute.tsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getUserCookie from "./getUserCookie";
import hasRole from "./hasRole";

export default function PrivateRouteHandler({ children, roles }) {
  const user = getUserCookie();

  const navigate = useNavigate();

  const userHasRequiredRole = !!(user && hasRole([...roles]));

  useEffect(() => {
    if (user && !userHasRequiredRole) {
      navigate("/");
    }
  }, [user]);

  return children;
}
