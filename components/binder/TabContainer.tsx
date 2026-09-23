"use client";
import { useState } from "react";

export interface BinderItem {
  name: string;
  pocketNumber: 4 | 9 | 12;
  tabContent?: React.ReactNode;
}

export default function TabContainer({
  binderArray,
}: {
  binderArray: BinderItem[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        role="tablist"
        className="tabs-lift tabs flex-nowrap space-x-1.5 overflow-x-auto"
      >
        {binderArray.map((binder, index) => (
          <button
            key={binder.name}
            role="tab"
            aria-selected={index === active}
            className={`tab rounded-t-xl p-2 font-bold whitespace-nowrap ${
              index === active
                ? "tab-active border-secondary border-2 border-b-0"
                : ""
            }`}
            onClick={() => setActive(index)}
          >
            {binder.name}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        className="border-base-300 bg-base-100 rounded-box rounded-ss-none border p-6"
      >
        {binderArray[active]?.tabContent}
      </div>
    </div>
  );
}
