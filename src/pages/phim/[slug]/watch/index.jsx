"use client"
import MovieSliderBasic from '@/components/common/movie-slider-basic'
import React, { useState } from 'react'
import { getMoviesDetailBySlug, getNewUpdatedMovies } from '@/services/movie';
import MovieDetailTable from '@/components/common/movie-detail-table';

/**
 * Layout
 *  -- iframe phim
 *  -- chi tiết phim
 *  -- các phần phim khác (nếu có)
 *  -- các phim liên quan (dạng slider)
 */

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { movie, episodes } = await getMoviesDetailBySlug(slug)
  const newMovies = await getNewUpdatedMovies();
  return {
    props: {
      movie: movie,
      episodes: episodes,
      newMovies: newMovies,
    }
  }
}

const MovieWatchPage = ({ movie, episodes, newMovies }) => {
  const [embedURL, setEmbedURL] = useState(episodes[0].server_data[0].link_embed)
  return (
    <div className=''>
      <div className="container mx-auto px-10 pt-20 bg-gradient-to-b from-gray-950 via-gray-700 to-gray-950">
        <iframe src={embedURL} allowFullScreen frameborder="0" className='w-full h-[40%] lg:h-[80vh]'></iframe>
        <h1 className="text-white text-2xl font-bold mt-4 mb-6">{movie.name}</h1>
        <div className="overflow-x-auto bg-gray-900 rounded-2xl  px-4 py-6 flex flex-col lg:flex-row">
          <MovieDetailTable movie={movie} />
          <div className="w-1/2 flex flex-col gap-4">
            {episodes.map((episode, index) => (
              <div className='rounded-2xl bg-gray-950 px-4 py-6' key={index}>
                <h2 className="text-gray-200 text-base font-medium mb-4">{episode.server_name}</h2>
                <div className="flex gap-2">
                  {
                    episode.server_data.map((data, idx) => (
                      <div
                        key={idx}
                        onClick={() => setEmbedURL(data.link_embed)}
                        className="bg-green-600 hover:bg-green-700 rounded-xl px-4 py-1 cursor-pointer text-sm text-white">{data.name}</div>
                    ))
                  }
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <MovieSliderBasic movies={newMovies.items} title={"Phim mới cập nhật"} />
    </div>
  )
}

export default MovieWatchPage