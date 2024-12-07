import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import MovieCardPrimary from '@/components/ui/MovieCardPrimary';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlayCircle, FaRegBookmark } from 'react-icons/fa';
import { getImgURL } from '@/lib/utils';

const MovieSliderSecondary = ({ movies }) => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="min-h-screen container mx-auto px-10 flex gap-10 items-center relative ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950 via-transparent to-gray-950"></div>
      <Image
        src={getImgURL(movies[activeIndex].poster_url)}
        alt="movie poster"
        fill
        loading='lazy'
        quality={25}
        blurDataURL={getImgURL(movies[activeIndex].poster_url)}
        placeholder='blur'
        objectFit='cover'
        className="absolute inset-0 -z-20 blur" />
      <div className="absolute bottom-0 right-0 h-full w-1/5 z-20 bg-gradient-to-r from-transparent to-gray-950 pointer-events-none"></div>
      <FaCircleChevronRight
        className="absolute z-30 top-1/2 right-6 text-gray-300 hover:text-gray-200 text-3xl cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()}
      />
      <div className="w-1/2">
        <div className="flex flex-col gap-2">
          <div className='w-fit px-4 py-2  rounded-xl bg-gray-800 text-white text-xs font-semibold'>{movies[activeIndex].quality || "HD"}</div>
          <div className='text-[64px] leading-none font-extrabold text-white'>{movies[activeIndex].name}</div>
          <div className='text-sm text-gray-400 font-semibold'>{movies[activeIndex].origin_name} &middot; {movies[activeIndex].year} &middot; thêm độ dài vào đây </div>
          {/* <div className="h-[72px] mb-4 text-base text-gray-200 font-normal line-clamp-3">
            mô tả
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto. Quo hic officia recusandae ex quam fugiat quis officiis quae.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto. Quo hic officia recusandae ex quam fugiat quis officiis quae.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, iusto. Quo hic officia recusandae ex quam fugiat quis officiis quae.
          </div> */}
          <div className="flex gap-2">
            <Link href={`/phim/${movies[activeIndex].slug}`} className='px-8 py-4 rounded-2xl flex items-center gap-2 transition-all bg-green-900 hover:bg-green-600 text-white font-semibold'>
              <FaPlayCircle />
              Xem chi tiết
            </Link>
            <button className='px-6 py-4 rounded-2xl flex items-center gap-2 bg-transparent border border-white text-white font-semibold'>
              <FaRegBookmark />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        className='w-1/2'
        loop={true}
        modules={[Navigation]}
        spaceBetween={20}
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