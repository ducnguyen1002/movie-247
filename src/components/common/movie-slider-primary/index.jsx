import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import MovieCardPrimary from '@/components/ui/MovieCardPrimary';

const MovieSliderPrimary = ({ title, movies }) => {
  const swiperRef = useRef();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative bg-gray-950 container mx-auto px-4 py-6 lg:px-10 lg:py-12">
      <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4.5}
        breakpoints={{
          320: {
            slidesPerView: 2.2, // Mobile
          },
          768: {
            slidesPerView: 3.5, // Tablet
          },
          1024: {
            slidesPerView: 4.5, // Desktop
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          if (swiperRef.current) {
            setIsBeginning(swiperRef.current.isBeginning);
            setIsEnd(swiperRef.current.isEnd);
          }
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCardPrimary movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút Prev */}
      {!isBeginning && (
        <div className='hidden lg:block'>
          <div className="absolute bottom-0 left-0 h-[80%] w-1/5 z-20 bg-gradient-to-l from-transparent to-gray-950 pointer-events-none"></div>
          <FaCircleChevronLeft
            className="absolute z-30 top-1/2 left-6 text-gray-300 hover:text-gray-200 text-3xl cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>
      )}

      {/* Nút Next */}
      {!isEnd && (
        <div className='hidden lg:block'>
          <div className="absolute bottom-0 right-0 h-full w-1/5 z-20 bg-gradient-to-r from-transparent to-gray-950 pointer-events-none"></div>
          <FaCircleChevronRight
            className="absolute z-30 top-1/2 right-6 text-gray-300 hover:text-gray-200 text-3xl cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      )}
    </div>
  );
};

export default MovieSliderPrimary