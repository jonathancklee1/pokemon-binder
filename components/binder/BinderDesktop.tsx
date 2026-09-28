"use client";
import { CardDataType } from "@/lib/types";
import BinderPage from "./BinderPage";
import { useContext } from "react";
import { chunkArray } from "@/lib/utils";
import PageNumberContext from "@/lib/contexts/PageNumberContext";
import { useActiveBinder } from "@/lib/hooks/useActiveBinder";

function BinderDesktop({
  cardList,
  activeTab,
}: {
  cardList: CardDataType[];
  activeTab: string;
}) {
  const { currentPage } = useContext(PageNumberContext);
  const { activePocketSize } = useActiveBinder(activeTab);
  const chunkedCardList = chunkArray(cardList, activePocketSize || 1);
  console.log("chunkedCardList", chunkedCardList);

  //Page 0 is closed binder, page 1 is Binder cover + right page, page 2 is left page + right page

  let leftPage;
  let rightPage;

  const leftCardList = chunkedCardList[(currentPage - 1) * 2 - 1] || [];
  const rightCardList = chunkedCardList[(currentPage - 1) * 2] || [];
  console.log("leftCardList", leftCardList, (currentPage - 1) * 2 - 1);
  console.log("rightCardList", rightCardList, (currentPage - 1) * 2);

  //Left page
  switch (currentPage) {
    case 0:
      leftPage = null;
      break;
    case 1:
      leftPage = (
        <div className="bg-secondary h-full rounded-md rounded-l-4xl rounded-r-lg p-4 shadow-sm"></div>
      );
      break;
    default:
      leftPage = (
        <BinderPage
          cardList={leftCardList}
          pocketSize={activePocketSize || 4}
        />
      );
  }

  //Right page
  switch (currentPage) {
    case 0:
      rightPage = (
        <div className="bg-secondary grid h-[70vh] place-items-center rounded-md rounded-l-lg rounded-r-4xl p-4 shadow-sm">
          <span className="text-4xl font-bold">Binder</span>
        </div>
      );
      break;

    default:
      rightPage = (
        <BinderPage
          cardList={rightCardList}
          pocketSize={activePocketSize || 4}
        />
      );
  }

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      <div className="basis-[calc(50%-0.5rem)]">{leftPage}</div>
      <div className="basis-[calc(50%-0.5rem)]">{rightPage}</div>
    </div>
  );
}

export default BinderDesktop;
