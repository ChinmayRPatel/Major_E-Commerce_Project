import React from 'react';
import { mainCarouselData } from './MainCaroselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };


const MainCrosel = () => {
    // const navigate = useNavigate
    // onClick={()=navigate} 
    const items = mainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image}  alt="img" />)

    return(
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            />
    )
}
export default MainCrosel;