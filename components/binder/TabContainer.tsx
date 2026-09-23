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
  return (
    <div className="overflow-x-auto">
      <div className="tabs-lift tabs space-x-1.5">
        {binderArray.map((binder, index) => (
          <>
            <input
              type="radio"
              name="my_tabs_7"
              className="tab checked:border-secondary z-1 rounded-t-xl p-2 font-bold checked:border-2 checked:border-b-0"
              aria-label={binder.name + " tab"}
              defaultChecked={index === 0}
            />
            <div className="tab-content border-base-300 bg-base-100 sticky start-0 p-6">
              {binder.tabContent}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
