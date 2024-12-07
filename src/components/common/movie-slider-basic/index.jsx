import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import MovieCardBase from '@/components/ui/MovieCardBase';

const MovieSliderBasic = ({ title, movies }) => {
  const swiperRef = useRef();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative bg-gray-950 container mx-auto px-10 py-12">
      <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4.5}
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
            <MovieCardBase movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Nút Prev */}
      {!isBeginning && (
        <>
          <div className="absolute bottom-0 left-0 h-[85%] w-1/5 z-20 bg-gradient-to-l from-transparent to-gray-950 pointer-events-none"></div>
          <FaCircleChevronLeft
            className="absolute z-30 top-1/2 left-6 text-gray-300 hover:text-gray-200 text-3xl cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </>
      )}

      {/* Nút Next */}
      {!isEnd && (
        <>
          <div className="absolute bottom-0 right-0 h-full w-1/5 z-20 bg-gradient-to-r from-transparent to-gray-950 pointer-events-none"></div>
          <FaCircleChevronRight
            className="absolute z-30 top-1/2 right-6 text-gray-300 hover:text-gray-200 text-3xl cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </>
      )}
    </div>
  );
};

export default MovieSliderBasic