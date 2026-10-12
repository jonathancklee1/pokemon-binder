"use client";
import TabContainer from "./TabContainer";
import { useBindersStore } from "@/lib/stores/BinderStoreProvider";

function BinderTabContainer() {
  const { binders } = useBindersStore((state) => state);
  console.log("binders", binders);
  return <TabContainer binderArray={binders} />;
}

export default BinderTabContainer;
