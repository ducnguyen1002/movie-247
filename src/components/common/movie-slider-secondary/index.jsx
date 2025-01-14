import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { FaCircleChevronRight } from "react-icons/fa6";
import MovieCardPrimary from '@/components/ui/MovieCardPrimary';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle, FaRegBookmark } from 'react-icons/fa';
import { getImgURL } from '@/lib/utils';

const MovieSliderSecondary = ({ movies }) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="min-h-screen container mx-auto py-12 px-4 lg:px-10 flex flex-col-reverse lg:flex-row gap-10 items-center relative ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950 via-transparent to-gray-950"></div>
      <Image
        src={getImgURL(movies[activeIndex]?.thumb_url)}
        alt="movie thumb"
        fill
        sizes='100w'
        style={{ objectFit: "cover", objectPosition: "center" }}
        loading='eager'
        priority
        quality={10}
        blurDataURL={getImgURL(movies[activeIndex].thumb_url)}
        placeholder='blur'
        className="size-full absolute inset-0 -z-20 blur" />
      <div className="absolute bottom-0 right-0 h-full w-1/5 z-20 bg-gradient-to-r from-transparent to-gray-950 pointer-events-none"></div>
      <FaCircleChevronRight
        className="hidden lg:block absolute z-30 top-1/2 right-6 text-gray-300 hover:text-gray-200 text-3xl cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      />
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-2">
          <div className='w-fit px-2 py-1 lg:px-4 lg:py-2 rounded-xl bg-gray-800 text-white text-xs font-semibold'>{movies[activeIndex].quality || "HD"}</div>
          <div className='text-xl lg:text-[64px] leading-none font-extrabold text-white'>{movies[activeIndex].name}</div>
          <div className='text-sm text-gray-400 font-semibold mt-2 mb-4 lg:mt-4 lg:mb-8'>{movies[activeIndex].origin_name} &middot; {movies[activeIndex].year} &middot; {movies[activeIndex].time} </div>
          <div className="flex gap-2">
            <Link href={`/phim/${movies[activeIndex].slug}`}
              className='px-4 py-2 lg:px-8 lg:py-4 rounded-2xl flex items-center gap-2 transition-all bg-green-900 hover:bg-green-600 text-white text-sm lg:text-base font-semibold'>
              <FaPlayCircle />
              Xem chi tiết
            </Link>
            <button
              className='px-4 py-2 lg:px-6 lg:py-4 rounded-2xl flex items-center gap-2 bg-transparent border border-white text-white text-sm lg:text-base font-semibold'
              aria-label="save the movie"
            >
              <FaRegBookmark />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        className='w-full lg:w-1/2'
        loop={true}
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1.2, // Mobile
          },
          768: {
            slidesPerView: 3.5, // Tablet
          },
          1024: {
            slidesPerView: 2.2, // Desktop
          },
          1440: {
            slidesPerView: 2.5
          }
        }}
        slidesPerView={2.5}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          if (swiperRef.current) {
            setActiveIndex(swiperRef.current.realIndex);
          }
        }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCardPrimary movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieSliderSecondary