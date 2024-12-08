import { getImgURL } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export const MovieCardPrimary = ({ movie }) => {
  return (
    <Link
      href={`/phim/${movie.slug}`}
      className="p-4 lg:p-6 relative h-[400px] rounded-2xl overflow-hidden flex flex-col 
      justify-end border border-transparent hover:border-gray-400 group">
      <div className="absolute inset-0 -z-10">
        <Image
          src={getImgURL(movie.poster_url)}
          alt={movie.name}
          fill
          objectFit="cover"
          loading="lazy"
          quality={100}
          placeholder="blur"
          blurDataURL={getImgURL(movie.poster_url)}
          className='group-hover:scale-105 transition-all duration-500'
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="mb-1 text-white text-base font-bold">{movie.name}</div>
      <div className='text-sm text-gray-400'>{movie.origin_name} &middot; {movie.year} </div>
    </Link>
  )
}

export default MovieCardPrimary