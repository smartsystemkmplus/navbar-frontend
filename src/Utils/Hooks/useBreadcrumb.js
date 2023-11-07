import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useBreadcrumb(
  initBreadcrumbItems,
  BREADCRUMB_CASE,
) {
  const { pathname } = useLocation();

  const [breadcrumbItems, setBreadcrumbItems] = useState(
    initBreadcrumbItems,
  );

  useEffect(() => {
    const crumb = BREADCRUMB_CASE.filter(
      (item) => pathname.includes(item.path) && item,
    );
    setBreadcrumbItems([...initBreadcrumbItems, ...crumb]);
  }, [pathname]);

  return { breadcrumbItems, setBreadcrumbItems };
}
