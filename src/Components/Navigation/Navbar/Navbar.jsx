import { Icon } from "@iconify/react";
import { Menu } from "@mantine/core";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Bell from "../../Assets/Icon/Bell";
import MenuFill from "../../Assets/Icon/MenuFill";
import Messages from "../../Assets/Icon/Messages";
import portaverse from "../../Assets/Pictures/portaverse_transparent.png";
import Notification from "../../Notification";
import HelpCenter from "./HelpCenter";
import NavbarSearch from "./NavbarSearch";
import ProfileDropdown from "./ProfileDropdown";
import hasRole from "../../../Utils/Helpers/hasRole";

const Navbar = forwardRef((props, ref) => {
  const { extendSidebar, setExtendSidebar } = props;

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white h-14 border-gray-200 px-4 py-2.5 drop-shadow-sm sticky top-0 z-50">
      <div className="flex self-center items-center gap-5">
        <div ref={ref} className="flex items-center">
          <button
            type="button"
            onClick={() => setExtendSidebar(!extendSidebar)}
          >
            <MenuFill width={33} />
          </button>
        </div>

        <Link to="/">
          <img
            src={portaverse}
            alt="logo"
            className="w-[7rem]"
            loading="lazy"
          />
        </Link>

        {!hasRole(["SBCN", "VNDR"]) && (
          <Menu>
            <Menu.Target>
              <div className="flex items-center gap-1 py-1 px-3 rounded-md bg-primary4/10 text-primary4 font-semibold cursor-pointer">
                <span>LMS</span>
                <Icon icon="bxs:down-arrow" width={12} />
              </div>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <a href={import.meta.env.VITE_KMS_URL}>KMS</a>
              </Menu.Item>
              <Menu.Item>
                <a href={import.meta.env.VITE_TMS_URL}>TMS</a>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </div>

      <div className="flex items-center w-400 gap-6">
        <NavbarSearch />

        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-3.5">
            <a href={`${import.meta.env.VITE_KMS_URL}/messaging`}>
              <Messages />
            </a>
            <HelpCenter />
            <Notification icon={<Bell />} />
            <hr className="border-r h-6 mx-1" />
          </div>

          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
});

export default Navbar;

Navbar.propTypes = {
  extendSidebar: PropTypes.bool.isRequired,
  setExtendSidebar: PropTypes.func.isRequired,
};
