"use client";

import BinderTabContainer from "@/components/binder/BinderTabContainer";

import { BindersStoreProvider } from "@/lib/stores/BinderStoreProvider";

export default function Home() {
  // const binderData: BinderItem[] = [
  //   {
  //     name: "151 collection",
  //     pocketNumber: 4,
  //     tabContent: <BinderContent />,
  //   },
  //   {
  //     name: "Shining Legends",
  //     pocketNumber: 9,
  //     tabContent: <BinderContent />,
  //   },
  //   {
  //     name: "Hidden Fates",
  //     pocketNumber: 12,
  //     tabContent: <div>Tab content for Hidden Fates</div>,
  //   },
  // ];
  return (
    <div className="">
      <main>
        <BindersStoreProvider>
          <BinderTabContainer />
        </BindersStoreProvider>
      </main>
    </div>
  );
}
