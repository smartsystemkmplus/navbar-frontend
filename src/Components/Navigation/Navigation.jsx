import { useCallback, useRef, useState } from "react";
import useOnClickOutside from "../../Utils/Hooks/useOnClickOutside";
import NewNavbar from "./NewNavbar";
import NewSidebar from "./NewSidebar";

export default function Navigation() {
  const navRef = useRef();
  const sideRef = useRef();
  const [extendSidebar, setExtendSidebar] = useState(false);

  const handler = useCallback(() => setExtendSidebar(false), []);
  useOnClickOutside(navRef, sideRef, handler);

  return (
    <>
      <NewSidebar
        ref={sideRef}
        extendSidebar={extendSidebar}
        setExtendSidebar={setExtendSidebar}
      />
      <NewNavbar
        ref={navRef}
        extendSidebar={extendSidebar}
        setExtendSidebar={setExtendSidebar}
      />
    </>
  );
}
