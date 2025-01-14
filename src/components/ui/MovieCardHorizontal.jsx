import { getImgURL } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieCardHorizontal = ({ movie }) => {
  return (
    <Link href={`/phim/${movie.slug}`} className='h-[300px] relative flex gap-4 p-4 items-end rounded-xl overflow-hidden group'>
      <Image
        className='absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out group-hover:scale-110'
        src={getImgURL(movie.thumb_url)}
        alt={movie.name}
        style={{ width: '120%' }}
        height={240}
        width={400}
      />
      <Image
        className='rounded-xl h-[160px] border-[2px] border-gray-300'
        src={getImgURL(movie.poster_url)}
        alt={movie.name}
        width={100}
        height={200}
      />
      <div className="flex flex-col justify-center gap-2">
        <span className='w-fit rounded-xl text-xs text-black bg-gray-300 py-1 px-2'>{movie.quality}</span>
        <p className="mb-1 text-white text-base font-bold line-clamp-1">{movie.name}</p>
        <div className='text-sm text-gray-200 line-clamp-1'>{movie.origin_name} &middot; {movie.year}</div>
        <div className='text-xs text-gray-300 line-clamp-1'>{movie.lang}</div>
      </div>
    </Link>
  )
}

export default MovieCardHorizontal;
