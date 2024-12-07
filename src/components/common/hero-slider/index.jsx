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
  <div className='min-h-screen w-full container mx-auto pt-20 px-10 flex items-center relative'>
    <div className="absolute inset-0 -z-10">
      <Image
        src={getImgURL(movie.poster_url)}
        alt={movie.name}
        fill
        objectFit="cover"
        loading="lazy"
        quality={100}
        placeholder="blur"
        blurDataURL={movie.poster_url}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
    </div>
    <div className="flex flex-col gap-2 w-full lg:w-1/2">
      <div className='w-fit px-4 py-2  rounded-xl bg-gray-800 text-white text-xs font-semibold'>{movie.quality || "HD"}</div>
      <div className='text-[64px] leading-none font-extrabold text-white'>{movie.name}</div>
      <div className='mb-4 text-sm text-gray-400 font-semibold'>{movie.origin_name} &middot; {movie.year} </div>
      {movie.content && (
        <div className='mb-6 text-gray-100 font-semibold' dangerouslySetInnerHTML={{ __html: movie.content }}></div>
      )}
      <div className="flex gap-2">
        <Link
          href={primaryBtnURL}
          className='px-8 py-4 rounded-2xl flex items-center gap-2 transition-all bg-green-900 hover:bg-green-600 text-white font-semibold'>
          <FaPlayCircle />
          {primaryBtnTitle}
        </Link>
        <button className='px-6 py-4 rounded-2xl flex items-center gap-2 bg-transparent border border-white text-white font-semibold'>
          <FaRegBookmark />
        </button>
      </div>
    </div>
  </div>
)

export default HeroSlider