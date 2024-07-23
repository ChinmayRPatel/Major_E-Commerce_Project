import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarosel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = data.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    const carouselRef = useRef(null);

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className="border">
          <h2 className="text-2xl font-extrabold  text-grey-800 py-5 text-left">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                    ref={carouselRef}
                />
                {activeIndex !== 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-50 bg-white hover:bg-blue-500"
                        aria-label="previous"
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white",
                        }}
                    >
                        <KeyboardArrowLeftIcon style={{ transform: "rotate(0deg)", color: "black" }} />
                    </Button>
                )}
                {activeIndex !== items.length - responsive[1024].items && (
                    <Button
                        onClick={slideNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-50 bg-white hover:bg-blue-500"
                        aria-label="next"
                    >
                        <KeyboardArrowRightIcon sx={{ transform: "rotate(0deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
