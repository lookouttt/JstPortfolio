import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import bee_harvest_pic from '../app/assets/img/gallery/bee_harvest.jpg';
import eagle_pic from '../app/assets/img/gallery/eagle.jpg';
import large_falls_pic from '../app/assets/img/gallery/large_falls.jpg';
import leaf_pic from '../app/assets/img/gallery/leaf_insect.jpg';
import pigeon_pic from '../app/assets/img/gallery/pigeons.jpg';
import triple_falls_pic from '../app/assets/img/gallery/triple_falls.jpg';



const PhotoPage = () => {
    const slides = [
        {
            url: `${bee_harvest_pic}`,
        },
        {
            url: `${eagle_pic}`,
        },
        {
            url: `${large_falls_pic}`,
        },
        {
            url: `${leaf_pic}`,
        },
        {
            url: `${pigeon_pic}`,
        },
        {
            url: `${triple_falls_pic}`,
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div id="jst_photos">
            <div className="bg-gradient-to-b from-stone-200 from-10% via-stone-400 via-60% to-stone-600 to-90%">
                <h1 className="mx-5 py-5 px-2 flex-initial text-2xl sm:text-3xl md:text-4xl lg:text-5xl">My Photos</h1>
                <div className='max-w-[1050px] h-[700px] w-full mx-auto pt-8 pb-16 px-4 relative group'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    >
                    </div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white   cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoPage;