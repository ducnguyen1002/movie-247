import Link from 'next/link'
import React from 'react'

const MovieDetailTable = ({ movie }) => {
  return (
    <table className="w-full lg:w-1/2 table-auto">
      <tbody>
        <tr>
          <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Tên gốc</td>
          <td className="pr-0 lg:pr-4 py-2 text-white text-sm lg:text-base">{movie.origin_name}</td>
        </tr>
        {
          movie.episode_current && (
            <tr>
              <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Tập hiện tại</td>
              <td className="pr-0 lg:pr-4 py-2 text-white text-sm lg:text-base">{movie.episode_current}</td>
            </tr>
          )
        }
        {
          movie.episode_current && (
            <tr>
              <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Tổng số tập</td>
              <td className="pr-0 lg:pr-4 py-2 text-white text-sm lg:text-base">{movie.episode_total}</td>
            </tr>
          )
        }
        <tr>
          <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Thời lượng</td>
          <td className="pr-0 lg:pr-4 py-2 text-white text-sm lg:text-base">{movie.time}</td>
        </tr>
        <tr>
          <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Diễn viên</td>
          <td className="pr-0 lg:pr-4 py-2 text-white text-sm lg:text-base">{movie.actor.join(", ")}</td>
        </tr>
        <tr>
          <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Đạo diễn</td>
          <td className="pr-0 lg:pr-4 py-2 text-white text-sm lg:text-base">{movie.director.join(", ")}</td>
        </tr>
        <tr>
          <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Thể loại</td>
          <td className="pr-4 py-2 flex gap-1 lg:gap-2 flex-wrap">
            {movie.category.map((cat) => (
              <Link href={`/the-loai/${cat.slug}`} key={cat.id} className="inline-block bg-gray-200 rounded-full px-2 lg:px-4 py-1 text-sm lg:text-base lowercase">{cat.name}</Link>
            ))}
          </td>
        </tr>
        <tr>
          <td className="pr-2 lg:pr-4 py-2 font-semibold text-gray-400 min-w-[120px] text-sm lg:text-base lg:min-w-[160px]">Quốc gia</td>
          <td className="pr-4 py-2 flex gap-1 lg:gap-2 flex-wrap">
            {movie.country.map((cnt) => (
              <Link href={`/quoc-gia/${cnt.slug}`} key={cnt.id} className="inline-block bg-gray-200 rounded-full px-2 lg:px-4 py-1 text-sm lg:text-base">{cnt.name}</Link>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MovieDetailTable