import React from 'react'

const MovieDetailTable = ({ movie }) => {
  return (
    <table className="w-full lg:w-1/2 table-auto">
      <tbody>
        <tr>
          <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Tên gốc</td>
          <td className="pr-4 py-2 text-white">{movie.origin_name}</td>
        </tr>
        {
          movie.episode_current && (
            <tr>
              <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Tập hiện tại</td>
              <td className="pr-4 py-2 text-white">{movie.episode_current}</td>
            </tr>
          )
        }
        {
          movie.episode_current && (
            <tr>
              <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Tổng số tập</td>
              <td className="pr-4 py-2 text-white">{movie.episode_total}</td>
            </tr>
          )
        }
        <tr>
          <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Thời lượng</td>
          <td className="pr-4 py-2 text-white">{movie.time}</td>
        </tr>
        <tr>
          <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Diễn viên</td>
          <td className="pr-4 py-2 text-white">{movie.actor.join(", ")}</td>
        </tr>
        <tr>
          <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Đạo diễn</td>
          <td className="pr-4 py-2 text-white">{movie.director.join(", ")}</td>
        </tr>
        <tr>
          <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Danh mục</td>
          <td className="pr-4 py-2">
            {movie.category.map((cat) => (
              <span key={cat.id} className="inline-block bg-gray-200 rounded-full px-4 py-1 mr-2 lowercase">{cat.name}</span>
            ))}
          </td>
        </tr>
        <tr>
          <td className="pr-4 py-2 font-semibold text-gray-400 min-w-[160px]">Quốc gia</td>
          <td className="pr-4 py-2">
            {movie.country.map((cnt) => (
              <span key={cnt.id} className="inline-block bg-gray-200 rounded-full px-4 py-1 mr-2">{cnt.name}</span>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MovieDetailTable