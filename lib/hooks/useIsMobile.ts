import { useSyncExternalStore, useCallback } from "react";

const MOBILE_BREAKPOINT = "(max-width: 768px)";

export function useIsMobile(query = MOBILE_BREAKPOINT): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === "undefined") return () => {};

      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);

      return () => matchMedia.removeEventListener("change", callback);
    },
    [query],
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
