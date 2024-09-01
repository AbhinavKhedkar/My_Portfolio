import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeCarousel = () => {
    const images = [
        '/images/carousal/1.png',
        '/images/carousal/2.png',
        '/images/carousal/3.png',
        '/images/carousal/4.png',
        '/images/carousal/5.png',
        '/images/carousal/6.png',
        '/images/carousal/7.png',
        '/images/carousal/8.png'
    ];

    const items = images.map((image, index) => (
        <img key={index} className='cursor-pointer' role='presentation' src={image} alt={`Slide ${index + 1}`} />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
}

export default HomeCarousel;
