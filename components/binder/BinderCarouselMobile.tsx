import { Carousel } from "nuka-carousel";
import BinderPage from "./BinderPage";
import { CardDataType } from "@/lib/types";

function BinderCarouselMobile({
  cardList,
  pocketSize = 4,
}: {
  cardList: CardDataType[];
  pocketSize: number;
}) {
  const binderPageNum = Math.ceil(cardList.length / pocketSize);
  console.log("binderPageNum:", binderPageNum);
  return (
    <Carousel showDots scrollDistance="slide">
      {Array.from({ length: binderPageNum }, (_, pageIndex) => {
        const startIndex = pageIndex * pocketSize;
        return (
          <div className="w-full shrink-0" key={startIndex}>
            <BinderPage
              cardList={cardList.slice(startIndex, startIndex + pocketSize)}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default BinderCarouselMobile;
