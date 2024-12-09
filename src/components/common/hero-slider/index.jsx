import { FaBookmark, FaPlayCircle, FaRegBookmark } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Link from "next/link";
import Image from "next/image";
import { EffectFade, Autoplay, Pagination, Parallax } from 'swiper/modules';
import { getImgURL } from "@/lib/utils";

const HeroSlider = ({ movies }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Autoplay, Pagination, Parallax]} effect="fade"
    >
      {
        movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <HeroSingleMovie
              movie={movie}
              primaryBtnTitle={"Xem chi tiết"}
              primaryBtnURL={`/phim/${movie.slug}`}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export const HeroSingleMovie = ({ movie, primaryBtnTitle, primaryBtnURL }) => (
  <div className='min-h-screen w-full container mx-auto px-4 pb-20 lg:pb-0 pt-20 lg:px-10 flex items-end lg:items-center relative'>
    <div className="absolute inset-0 -z-10">
      <Image
        src={getImgURL(movie.poster_url)}
        alt={movie.name}
        fill
        className="object-cover"
        priority={true}
        quality={100}
        placeholder="blur"
        blurDataURL={movie.poster_url}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
    </div>
    <div className="flex flex-col gap-2 w-full lg:w-1/2">
      <div className='w-fit px-2 py-1 lg:px-4 lg:py-2 rounded-xl bg-gray-800 text-white text-xs font-semibold'>{movie.quality || "HD"}</div>
      <div className='text-xl lg:text-[64px] leading-none font-extrabold text-white'>{movie.name}</div>
      <div className='text-sm text-gray-400 font-semibold mt-2 mb-4 lg:mt-4 lg:mb-8'>{movie.origin_name} &middot; {movie.year} </div>
      {movie.content && (
        <div className='mb-6 text-gray-100 font-semibold' dangerouslySetInnerHTML={{ __html: movie.content }}></div>
      )}
      <div className="flex gap-2">
        <Link
          href={primaryBtnURL}
          className='px-4 py-2 lg:px-8 lg:py-4 rounded-2xl flex items-center gap-2 transition-all bg-green-900 hover:bg-green-600 text-white text-sm lg:text-base font-semibold'>
          <FaPlayCircle />
          {primaryBtnTitle}
        </Link>
        <button className='px-4 py-2 lg:px-6 lg:py-4 rounded-2xl flex items-center gap-2 bg-transparent border border-white text-white text-sm lg:text-base font-semibold'>
          <FaRegBookmark />
        </button>
      </div>
    </div>
  </div>
)

export default HeroSlider