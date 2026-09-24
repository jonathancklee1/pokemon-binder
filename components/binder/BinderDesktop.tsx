"use client";
import { CardDataType } from "@/lib/types";
import BinderPage from "./BinderPage";
import { useState } from "react";

function BinderDesktop({
  cardList,
  pocketSize,
}: {
  cardList: CardDataType[];
  pocketSize: 4 | 9 | 12;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  //Page 0 is closed binder, page 1 is Binder cover + right page, page 2 is left page + right page

  let leftPage;
  let rightPage;

  const leftCardList = cardList.slice(0, Math.floor(cardList.length / 2));
  const rightCardList = cardList.slice(Math.floor(cardList.length / 2));
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
      leftPage = <BinderPage cardList={leftCardList} pocketSize={pocketSize} />;
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
        <BinderPage cardList={rightCardList} pocketSize={pocketSize} />
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
