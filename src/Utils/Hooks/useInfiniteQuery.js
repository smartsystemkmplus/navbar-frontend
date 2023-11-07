import { useRef } from "react";
import useOnScrollFetch from "./useOnScrollFetch";

export default function useInfiniteQuery(
  reactQueryObj,
  orientation = "vertical", // "vertical" || "horizontal"
) {
  const ref = useRef(null);
  const { hasNextPage, fetchNextPage, ...rest } = reactQueryObj;

  useOnScrollFetch(hasNextPage, fetchNextPage, ref, orientation);

  return { ref, ...rest };
}
