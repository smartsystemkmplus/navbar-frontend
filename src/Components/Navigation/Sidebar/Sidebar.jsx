import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import getUserCookie from "../../../Utils/Helpers/getUserCookie";
import Analytics from "../../Assets/Icon/Analytics.svg";
import Home from "../../Assets/Icon/Home";
import SubconDashboard from "../../Assets/Icon/SubconDashboard.svg";
import VendorDashboard from "../../Assets/Icon/VendorDashboard.svg";

import {
  BASE_PROXY,
  SIGNATURE_ENDPOINT,
} from "../../../Networks/endpoint";
import { Networks } from "../../../Networks/factory";
import hasRole from "../../../Utils/Helpers/hasRole";

const InitSidebarMenu = {
  dashboard: false,
  home: false,
  explore: false,
  inventory: false,
  "course-pool": false,
  hq: false,
};

const Sidebar = forwardRef((props, ref) => {
  const user = useSelector((st) => st.privilegesAndRole.CMS);

  const userFromUserCookie = getUserCookie();

  const [SideMenus, setSideMenus] = useState([
    // {
    //   label: "Dashboard",
    //   key: "dashboard",
    //   route: "/dashboard",
    //   icon: <Icon icon="ph:chalkboard-teacher-fill" width={25} />,
    //   hidden: false,
    // },
    {
      label: "Home",
      key: "home",
      route: "/",
      childRoutes: ["/explore/request"],
      icon: <Home width={22} />,
      hidden: hasRole(["SBCN", "VNDR"]),
    },
    {
      label: "Dashboard",
      key: "dashboard",
      route: "/dashboard",
      icon: <Icon icon="ph:chalkboard-teacher-fill" width={25} />,
      hidden: hasRole(["SBCN", "VNDR"]),
    },

    {
      label: "Dashboard Kursus",
      key: "course-pool",
      route: "/course-pool/courses",
      icon: <Icon icon="clarity:blocks-group-solid" width={25} />,
      hidden: !hasRole(["CRPU", "SA"]),
    },
    // {
    //   label: "Subcon",
    //   key: "subcon",
    //   route: "/subcon",
    //   icon: <Icon icon="mdi:book-education-outline" width={25} />,
    //   hidden: !["CRPU", "SA", "VNDR"].includes(
    //     userFromUserCookie?.role_code,
    //   ),
    // },
    {
      label: "Manajemen Kompetensi",
      key: "competency-management",
      route: "/competency-management",
      icon: (
        <Icon
          icon="material-symbols:slide-library-rounded"
          width={25}
        />
      ),
      hidden: !hasRole(["CRPU", "SA"]),
    },
    {
      label: "Manajemen Sertifikat",
      key: "certificate-management",
      route: "/certificate-management",
      icon: <Icon icon="mingcute:certificate-2-fill" width={25} />,
      hidden: !hasRole(["CRPU", "SA"]),
    },
    {
      label: hasRole(["SBCN"])
        ? "Subcon Dashboard"
        : "Manajemen Subcon",
      key: "subcon-management",
      route: hasRole(["SBCN"])
        ? `/subcon-management/${userFromUserCookie?.subcon?.subcon_id}`
        : "/subcon-management",
      icon: (
        <img
          src={SubconDashboard}
          alt="analytics"
          className="w-[23px] h-[23px]"
        />
      ),
      hidden: !hasRole(["CRPU", "SA", "SBCN"]),
    },
    {
      label: hasRole(["VNDR"])
        ? "Vendor Dashboard"
        : "Manajemen Vendor",
      key: "vendor-management",
      route: "/vendor-management",
      icon: (
        <img
          src={VendorDashboard}
          alt="analytics"
          className="w-[21px] h-[21px]"
        />
      ),
      hidden: !hasRole(["CRPU", "SA", "VNDR"]),
    },
    {
      label: "Analytics",
      key: "analytics",
      route: "/analytics",
      icon: (
        <img
          src={Analytics}
          alt="analytics"
          className="w-[23px] h-[23px]"
        />
      ),
      hidden: !hasRole(["CRPU", "SA", "VNDR"]),
    },
    {
      label: "Manajemen Wallet",
      key: "wallet-management",
      route: "/wallet-management",
      icon: <Icon icon="uil:wallet" width={25} />,
      hidden: !hasRole(["CRPU", "SA"]),
    },
    // {
    //   label: "Inventory",
    //   key: "inventory",
    //   route: "/inventory",
    //   icon: <Icon icon="ic:round-inventory-2" width={25} />,
    //   hidden: true,
    // },
    // {
    //   label: "HQ",
    //   key: "hq",
    //   route: "/hq",
    //   icon: <Icon icon="ri:hq-fill" color="#016DB2" width={25} />,
    //   hidden: user?.role_code !== "SA",
    // },
  ]);
  const signatureService = Networks(BASE_PROXY.signature);

  const { data: _ } = signatureService.query(
    SIGNATURE_ENDPOINT.GET.checkSMSAuthorization,
    [SIGNATURE_ENDPOINT.GET.checkSMSAuthorization],
    {
      onSuccess: (res) => {
        const hasAccepted = !!res?.pass;
        if (hasAccepted) {
          setSideMenus((prev) => {
            if (
              prev.filter(
                (e) =>
                  e.key === "signature-management" &&
                  e?.route === res?.route,
              ).length
            ) {
              return [...prev];
            }
            const sideMenus = [
              ...prev.filter(
                (e) => e?.key !== "signature-management",
              ),
              {
                label: "Manajemen Tanda Tangan",
                key: "signature-management",
                route: res?.route,
                icon: <Icon icon="fa6-solid:signature" width={25} />,
                hidden: false,
                state: { fromDashboard: true },
              },
            ];
            return sideMenus;
          });
        }
      },
    },
  );

  const { extendSidebar, setExtendSidebar } = props;
  const { pathname } = useLocation();
  const [sidebarMenu, setSidebarMenu] = useState(InitSidebarMenu);

  const handleOnClickCollapse = () => {
    setExtendSidebar(false);
  };

  useEffect(() => {
    const url = pathname.split("/");
    const first = url[1] || "home";

    setSidebarMenu({
      ...InitSidebarMenu,
      [first]: true,
    });
  }, [pathname, extendSidebar]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-150 fixed z-[999] shadow-lg ${
        extendSidebar ? "w-16" : "w-0"
      }`}
    >
      <div className="sm:relative h-screen flex-col justify-between flex sm:flex">
        {extendSidebar && (
          <div className="bg-white min-h-screen">
            {SideMenus.map((menu) => (
              <NavItem
                key={menu.key}
                menu={menu}
                sidebarMenu={sidebarMenu}
                onClick={handleOnClickCollapse}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default Sidebar;

function NavItem({ menu, sidebarMenu, onClick }) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  return (
    <Link
      key={menu.key}
      to={menu.route}
      onClick={onClick}
      hidden={menu.hidden}
      state={menu?.state}
    >
      <div
        className={`flex w-full justify-between text-primary3 cursor-pointer items-center ${
          sidebarMenu[menu.key] ? "bg-bg4" : "bg-white hover:bg-bg2"
        }`}
      >
        <div className="flex items-center">
          {sidebarMenu[menu.key] ||
          menu.childRoutes?.includes?.(location.pathname) ? (
            <div className="translate-x-0 bg-primary3 h-[4.25rem] w-2" />
          ) : (
            <div className="-translate-x-5 bg-primary3 h-[4.25rem] w-2" />
          )}

          <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`flex items-center justify-between pl-1 py-5 gap-1 ${
              isHover ? "bg-bg2" : ""
            }`}
          >
            <div className="flex justify-center w-10 transition-all duration-150">
              {menu.icon}
            </div>

            <p
              className={`whitespace-nowrap mx-4 transition duration-200 ease-in-out font-medium ${
                isHover ? "inline-block" : "hidden"
              }`}
            >
              {menu.label}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

Sidebar.propTypes = {
  extendSidebar: PropTypes.bool.isRequired,
  setExtendSidebar: PropTypes.func.isRequired,
};
