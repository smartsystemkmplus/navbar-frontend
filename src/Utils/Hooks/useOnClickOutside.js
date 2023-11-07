import { useEffect } from "react";

export default function useOnClickOutside(navRef, sideRef, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        !navRef.current ||
        navRef.current.contains(event.target) ||
        !sideRef.current ||
        sideRef.current.contains(event.target)
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [navRef, sideRef, handler]);
}
