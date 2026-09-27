import { useSyncExternalStore, useCallback } from "react";

const MOBILE_BREAKPOINT = "(max-width: 768px)";

export function useIsMobile(query = MOBILE_BREAKPOINT): boolean {
  // 1. Subscribe function to attach/detach mediaQuery listener
  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === "undefined") return () => {};

      const matchMedia = window.matchMedia(query);
      matchMedia.addEventListener("change", callback);

      return () => matchMedia.removeEventListener("change", callback);
    },
    [query],
  );

  // 2. Read snapshot from the browser API
  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  // 3. Fallback for Server-Side Rendering (Next.js, SSR)
  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
