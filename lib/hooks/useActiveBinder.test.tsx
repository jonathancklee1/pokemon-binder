import { type ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { useActiveBinder } from "./useActiveBinder";
import ActiveTabContext from "../contexts/ActiveTabContext";
import { BindersStoreContext } from "../stores/BinderStoreProvider";
import { createBindersStore } from "../stores/BindersStore";

/** Builds a wrapper that provides the given store and active tab. */
function createWrapper(
  store: ReturnType<typeof createBindersStore>,
  activeTab: string,
) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <BindersStoreContext.Provider value={store}>
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab: () => {} }}>
          {children}
        </ActiveTabContext.Provider>
      </BindersStoreContext.Provider>
    );
  };
}

describe("useActiveBinder", () => {
  it("returns the binder whose id matches the active tab", () => {
    const store = createBindersStore();
    store.getState().addCollection();
    const activeId = store.getState().addCollection();

    const { result } = renderHook(() => useActiveBinder(), {
      wrapper: createWrapper(store, activeId),
    });

    expect(result.current.activeBinder?.id).toBe(activeId);
    expect(result.current.activePocketSize).toBe(4);
  });
});
