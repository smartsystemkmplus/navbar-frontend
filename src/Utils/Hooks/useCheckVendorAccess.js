import { useLocation, useParams } from "react-router-dom";
import getUserCookie from "../Helpers/getUserCookie";
import hasRole from "../Helpers/hasRole";

const useCheckVendorAccess = () => {
  const user = getUserCookie();
  const { vendorId } = useParams();
  const { pathname } = useLocation();
  const loggedInVendorId = user?.vendor?.vendor_id;
  const redirectPathVendor = `/vendor-management/${loggedInVendorId}`;
  const isVendorDashboardPage = pathname.includes(
    "/vendor-management",
  );

  if (hasRole(["SA"]))
    return { restricted: false, redirectPath: undefined };

  if (hasRole(["SBCN", "VNDR"])) {
    if (isVendorDashboardPage) {
      return {
        restricted: +vendorId !== loggedInVendorId,
        redirectPath: redirectPathVendor,
      };
    }
    return {
      restricted:
        isVendorDashboardPage && +vendorId !== loggedInVendorId,
      redirectPath: redirectPathVendor,
    };
  }

  return {
    restricted:
      (!isVendorDashboardPage && hasRole(["VNDR"])) ||
      (hasRole(["VNDR"]) && +vendorId !== user?.vendor?.vendor_id),
    redirectPath: `/vendor-management/${user?.vendor?.vendor_id}`,
  };
};

export default useCheckVendorAccess;
