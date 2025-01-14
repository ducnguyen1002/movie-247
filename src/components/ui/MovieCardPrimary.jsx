import { DEFAULT_THUMB_URL } from "@/lib/constants"
import { getImgURL } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export const MovieCardPrimary = ({ movie }) => {
  return (
    <Link
      href={`/phim/${movie.slug}`}
      className="p-4 lg:p-6 relative h-[240px] lg:h-[400px] rounded-2xl overflow-hidden flex flex-col 
      justify-end border border-transparent hover:border-gray-400 group">
      <div className="absolute inset-0 -z-10">
        <Image
          src={getImgURL(movie.poster_url)}
          alt={movie.name}
          width={300}
          height={450}
          style={{ objectFit: "cover" }}
          loading="eager"
          placeholder="blur"
          blurDataURL={DEFAULT_THUMB_URL}
          className='group-hover:scale-105 transition-all duration-500'
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="mb-1 text-white text-base font-bold line-clamp-2">{movie.name}</div>
      <div className='text-sm text-gray-400 line-clamp-1'>{movie.origin_name} &middot; {movie.year} </div>
    </Link>
  )
}

export default MovieCardPrimary