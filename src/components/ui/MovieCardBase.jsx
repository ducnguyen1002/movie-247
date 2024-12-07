import { getImgURL } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"

const MovieCardBase = ({ movie }) => {
  return (
    <Link href={`/phim/${movie.slug}`}>
      <div className="mb-4 max-h-[360px] overflow-hidden rounded-2xl">
        <Image
          src={getImgURL(movie.poster_url)}
          alt={movie.name}
          width={300}
          height={400}
          loading="lazy"
          quality={100}
          placeholder="blur"
          blurDataURL={getImgURL(movie.poster_url)}
          className="rounded-2xl hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="mb-1 text-white text-base font-bold line-clamp-1">{movie.name}</div>
      <div className="text-sm text-gray-400">
        {movie.time || movie.origin_name} &middot; {movie.year}
      </div>
    </Link>
  );
};


export default MovieCardBase