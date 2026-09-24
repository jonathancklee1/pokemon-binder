import BinderContent from "@/components/binder/BinderContent";
import TabContainer, { BinderItem } from "@/components/binder/TabContainer";

export default function Home() {
  const binderData: BinderItem[] = [
    {
      name: "151 collection",
      pocketNumber: 4,
      tabContent: <BinderContent />,
    },
    {
      name: "Shining Legends",
      pocketNumber: 9,
      tabContent: <BinderContent />,
    },
    {
      name: "Hidden Fates",
      pocketNumber: 12,
      tabContent: <div>Tab content for Hidden Fates</div>,
    },
  ];
  return (
    <div className="">
      <main>
        <TabContainer binderArray={binderData} />
      </main>
    </div>
  );
}
