import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarosel = () => {
    const [activeIndex, setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex-1);
  const slideNext  = () => setActiveIndex(activeIndex+1);
  const syncActiveIndex=({item})=>setActiveIndex(item);
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <HomeSectionCard key={index} />);
  
  const carouselRef = useRef(null);

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
        //   infinite
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        <Button
          onClick={slidePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-50 bg-white hover:bg-blue-500"
          aria-label="previous"
          >
          <KeyboardArrowLeftIcon style={{ transform: "rotate(0deg)", color: "black" }} />
        </Button>
        {activeIndex!==items.length-5 &&<Button
            onClick={slideNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-50 bg-white hover:bg-blue-500"
          aria-label="next"
        >
          <KeyboardArrowRightIcon style={{ transform: "rotate(0deg)", color: "black" }} />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
