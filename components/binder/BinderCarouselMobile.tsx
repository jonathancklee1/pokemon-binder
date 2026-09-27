import { Carousel, SlideHandle } from "nuka-carousel";
import BinderPage from "./BinderPage";
import { CardDataType } from "@/lib/types";
import PageNumberContext from "@/lib/contexts/PageNumberContext";
import { useContext, useEffect, useRef } from "react";

function BinderCarouselMobile({
  cardList,
  pocketSize = 4,
}: {
  cardList: CardDataType[];
  pocketSize: 4 | 9 | 12;
}) {
  const binderPageNum = Math.ceil(cardList.length / pocketSize);
  console.log("binderPageNum:", binderPageNum);
  const { currentPage, setCurrentPage } = useContext(PageNumberContext);

  const carouselRef = useRef<SlideHandle>(null);

  useEffect(() => {
    carouselRef.current?.goToPage(currentPage);
  }, [currentPage]);
  return (
    <Carousel
      ref={carouselRef}
      scrollDistance="slide"
      afterSlide={setCurrentPage}
      showDots
    >
      {Array.from({ length: binderPageNum + 1 }, (_, pageIndex) => {
        if (pageIndex === 0)
          return (
            <div
              className="bg-secondary grid w-full shrink-0 place-items-center rounded-md rounded-l-lg rounded-r-4xl p-4 shadow-sm"
              key="cover"
            >
              <span className="text-4xl font-bold">Binder</span>
            </div>
          );
        const startIndex = (pageIndex - 1) * pocketSize;
        return (
          <div className="w-full shrink-0" key={startIndex}>
            <BinderPage
              cardList={cardList.slice(startIndex, startIndex + pocketSize)}
              pocketSize={pocketSize}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default BinderCarouselMobile;
