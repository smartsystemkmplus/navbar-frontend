import { Icon } from "@iconify/react";
import hasRole from "../../../Utils/Helpers/hasRole";
import NewNotification from "../../Notification/NewNotification";
import ActionContainer from "../ActionContainer";
import NewHelpCenter from "./NewHelpCenter";
import NewNavbarSearch from "./NewNavbarSearch";
import NewProfileDropdown from "./NewProfileDropdown";
import PlatformMenu from "./PlatformMenu";

function NewNavbar({
  platform, // null || "LMS" || "KMS" || "TMS". null value will remove the platform menu button
}) {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-white h-14 border-gray-200 ml-16 px-5 py-2.5 drop-shadow-sm sticky top-0 z-50">
      {!hasRole(["SBCN", "VNDR"]) && <NewNavbarSearch />}

      <div className="flex justify-center items-center gap-2 ml-auto">
        {!!platform && !hasRole(["SBCN", "VNDR"]) && (
          <PlatformMenu platform={platform} />
        )}
        {!hasRole(["SBCN", "VNDR"]) && (
          <a href={`${import.meta.env.VITE_KMS_URL}/messaging`}>
            <ActionContainer>
              <Icon icon="ph:chat-circle" width={22} />
            </ActionContainer>
          </a>
        )}
        <NewHelpCenter />
        <NewNotification
          icon={<Icon icon="ri:notification-2-line" width={21} />}
        />

        <div className="ml-4">
          <NewProfileDropdown />
        </div>
      </div>
    </nav>
  );
}

export default NewNavbar;
