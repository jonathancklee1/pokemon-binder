"use client";
import { CardDataType } from "@/lib/types";
import BinderPage from "./BinderPage";
import BinderCover, { BinderInsideCover } from "./BinderCover";
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
  const { activeBinder, activePocketSize } = useActiveBinder(activeTab);
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
      leftPage = <BinderInsideCover className="h-full" layout="left" />;
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
  console.log("currentPage", currentPage);
  switch (currentPage) {
    case 0:
      rightPage = (
        <div className="relative">
          <div className="invisible">
            <BinderPage
              cardList={chunkedCardList[0] || []}
              pocketSize={activePocketSize || 4}
            />
          </div>
          <BinderCover
            title={activeBinder?.name}
            className="absolute inset-0"
            layout="right"
          />
        </div>
      );
      break;
    case 21:
      rightPage = <BinderInsideCover className="h-full" layout="right" />;
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
    <div className="mx-auto mt-4 flex max-w-375 flex-wrap gap-4">
      <div className="basis-[calc(50%-0.5rem)]">{leftPage}</div>
      <div className="basis-[calc(50%-0.5rem)]">{rightPage}</div>
    </div>
  );
}

export default BinderDesktop;
