"use client";
import { DEFAULT_THUMB_URL } from "@/lib/constants";
import { getImgURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const MovieCardBase = ({ movie }) => {
  return (
    <Suspense
      fallback={
        <div className="mb-4">
          <Skeleton className="h-[240px] lg:h-[300px] w-full rounded-2xl" />
          <Skeleton className="mt-2 h-4 w-3/4" />
          <Skeleton className="mt-1 h-4 w-1/2" />
        </div>
      }
    >
      <Link href={`/phim/${movie.slug}`}>
        <div className="mb-4 h-[240px] lg:h-[300px] overflow-hidden rounded-2xl">
          <Image
            src={getImgURL(movie.poster_url)}
            alt={movie.name}
            width={400}
            height={600}
            loading="lazy"
            placeholder="blur"
            blurDataURL={DEFAULT_THUMB_URL}
            className="rounded-2xl hover:scale-105 transition-all duration-500 object-cover"
          />
        </div>
        <div className="mb-1 text-white text-base font-bold line-clamp-1">
          {movie.name}
        </div>
        <div className="text-sm text-gray-400">
          {movie.time || movie.origin_name} &middot; {movie.year}
        </div>
      </Link>
    </Suspense>
  );
};

export default MovieCardBase;
