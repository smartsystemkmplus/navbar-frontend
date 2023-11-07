/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { Tooltip } from "@mantine/core";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BASE_PROXY,
  SIGNATURE_ENDPOINT,
} from "../../../Networks/endpoint";
import { Networks } from "../../../Networks/factory";
import getUserCookie from "../../../Utils/Helpers/getUserCookie";
import hasRole from "../../../Utils/Helpers/hasRole";
import IconSignatureManagement from "../../Assets/Icon/SignatureManagement";
import IconSubconManagement from "../../Assets/Icon/SubconManagement";
import IconVendorManagement from "../../Assets/Icon/VendorManagement";
import portaverse from "../../Assets/Pictures/portaverse_logo_transparent.png";
import ActionContainer from "../ActionContainer";

const InitSidebarMenu = {
  dashboard: false,
  home: false,
  explore: false,
  inventory: false,
  "course-pool": false,
  hq: false,
};

const NewSidebar = forwardRef((props, ref) => {
  const userFromUserCookie = getUserCookie();

  const [sideMenus, setSideMenus] = useState([
    {
      label: "Home & Explore",
      key: "home",
      route: "/",
      childRoutes: ["/explore/request"],
      icon: <Icon icon="octicon:home-16" width={22} />,
      shown: hasRole(["USER"]),
    },
    {
      label: "Dashboard",
      key: "dashboard",
      route: "/dashboard",
      icon: <Icon icon="carbon:user-avatar-filled-alt" width={25} />,
      shown: hasRole(["USER"]),
    },

    {
      label: "Dashboard Corpu",
      key: "course-pool",
      route: "/course-pool/courses",
      icon: <Icon icon="clarity:blocks-group-solid" width={25} />,
      shown: hasRole(["CRPU"]),
    },

    {
      label: "Manajemen Kompetensi",
      key: "competency-management",
      route: "/competency-management",
      icon: (
        <Icon
          icon="fluent:clipboard-task-list-rtl-24-regular"
          width={25}
        />
      ),
      shown: hasRole(["CRPU", "SA"]),
    },
    {
      label: "Manajemen Sertifikat",
      key: "certificate-management",
      route: "/certificate-management",
      icon: <Icon icon="mingcute:certificate-2-line" width={25} />,
      shown: hasRole(["CRPU", "SA"]),
    },
    {
      label: hasRole(["SBCN"])
        ? "Subcon Dashboard"
        : "Manajemen Subcon",
      key: "subcon-management",
      route: hasRole(["SBCN"])
        ? `/subcon-management/${userFromUserCookie?.subcon?.subcon_id}`
        : "/subcon-management",
      icon: <IconSubconManagement />,
      shown: hasRole(["CRPU", "SA", "SBCN"]),
    },
    {
      label: hasRole(["VNDR"])
        ? "Vendor Dashboard"
        : "Manajemen Vendor",
      key: "vendor-management",
      route: "/vendor-management",
      icon: <IconVendorManagement />,
      shown: hasRole(["CRPU", "SA", "VNDR"]),
    },
    {
      label: "Manajemen Trainer",
      key: "trainer-management",
      route: "/trainer-management",

      icon: <Icon icon="mdi:teach" width={25} />,
      shown: hasRole(["CRPU", "SA", "VNDR"]),
    },
    {
      label: "Analytics",
      key: "analytics",
      route: "/analytics",

      icon: <Icon icon="majesticons:analytics-line" width={25} />,
      shown: hasRole(["CRPU", "SA", "VNDR"]),
    },
    {
      label: "Manajemen Wallet",
      key: "wallet-management",
      route: "/wallet-management",
      icon: (
        <Icon
          icon="fluent:wallet-credit-card-16-regular"
          width={25}
        />
      ),
      shown: hasRole(["CRPU", "SA"]),
    },
    {
      label: "Manajemen Kuis Harian",
      key: "quiz-management",
      route: "/quiz-management",
      icon: <Icon icon="material-symbols:quiz-outline" width={25} />,
      shown: hasRole(["CRPU", "SA"]),
    },
    {
      label: "Manajemen Download",
      key: "download-manager",
      route: "/download-manager",
      icon: <Icon icon="mdi-light:view-module" width={30} />,
      shown: hasRole(["CRPU", "VNDR"]),
    },
    // {
    //   label: "HQ",
    //   key: "hq",
    //   route: "/hq",
    //   icon: <Icon icon="ri:hq-fill" color="#016DB2" width={25} />,
    //   shown: user?.role_code !== "SA",
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
            const menus = [
              ...prev.filter(
                (e) => e?.key !== "signature-management",
              ),
              {
                label: "Manajemen Tanda Tangan",
                key: "signature-management",
                route: res?.route,
                icon: <IconSignatureManagement width={25} />,
                shown: true,
                state: { fromDashboard: true },
              },
            ];
            return menus;
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

  const user = getUserCookie();
  const homePath = (() => {
    if (hasRole(["VNDR"])) {
      return `/vendor-management/${user?.vendor?.vendor_id}`;
    }
    if (hasRole(["SBCN"])) {
      return `/subcon-management/${user?.subcon?.subcon_id}`;
    }
    return `${import.meta.env.VITE_SSO_URL}/landing`;
  })();

  return (
    <nav
      ref={ref}
      className="transition-all duration-150 fixed z-50 border-r w-16"
    >
      <div className="sm:relative h-screen flex-col justify-between flex sm:flex">
        <div className="bg-white min-h-screen">
          <a href={homePath} className="flex">
            <img
              src={portaverse}
              alt="logo"
              className="w-[2.2rem] mx-auto mt-2.5 mb-8"
              loading="lazy"
            />
          </a>
          <div className="flex flex-col gap-3 max-h-[calc(100vh-77px)] overflow-y-auto scroll-style-3">
            {sideMenus.map((menu) => (
              <NavItem
                key={menu.key}
                menu={menu}
                sidebarMenu={sidebarMenu}
                onClick={handleOnClickCollapse}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
});

export default NewSidebar;

function NavItem({ menu, sidebarMenu, onClick }) {
  const location = useLocation();
  const isActive =
    sidebarMenu[menu.key] ||
    menu.childRoutes?.includes?.(location.pathname);

  return (
    <Link
      key={menu.key}
      to={menu.route}
      onClick={onClick}
      hidden={!menu.shown}
      state={menu?.state}
    >
      <Tooltip label={menu.label} position="right">
        <ActionContainer isActive={isActive}>
          {menu.icon}
        </ActionContainer>
      </Tooltip>
    </Link>
  );
}

NewSidebar.propTypes = {
  extendSidebar: PropTypes.bool.isRequired,
  setExtendSidebar: PropTypes.func.isRequired,
};
