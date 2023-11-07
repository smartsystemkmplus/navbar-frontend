import {
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import getUserCookie from "../Helpers/getUserCookie";
import hasRole from "../Helpers/hasRole";

const useCheckSubconAccess = () => {
  const user = getUserCookie();
  const { subconId, vendorId } = useParams();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const isSubconDashboardPage = pathname.includes(
    "/subcon-management",
  );
  const isVendorDashboardPage = pathname.includes(
    "/vendor-management",
  );

  if (hasRole(["SA"]))
    return { restricted: false, redirectPath: undefined };

  const isExplorePortoCoursePage =
    searchParams.get("mode") === "porto" &&
    pathname.includes("/explore/");

  const loggedInSubconId = user?.subcon?.subcon_id;
  const loggedInVendorId = user?.vendor?.vendor_id;
  const redirectPathSubcon = `/subcon-management/${loggedInSubconId}`;
  const redirectPathVendor = `/vendor-management/${loggedInVendorId}`;

  if (isExplorePortoCoursePage) {
    return {
      restricted: false,
      redirectPath: redirectPathSubcon,
    };
  }

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
      (!isSubconDashboardPage && hasRole(["SBCN"])) ||
      (hasRole(["SBCN"]) && +subconId !== loggedInSubconId),
    redirectPath: redirectPathSubcon,
  };
};

export default useCheckSubconAccess;
