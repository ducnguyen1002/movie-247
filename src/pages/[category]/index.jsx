import React from 'react'

import { getMoviesByCategory } from '@/services/movie';
import ThePagination from '@/components/common/the-pagination';
import MovieCardBase from '@/components/ui/MovieCardBase';


/**
 * Hiển thị các film theo danh mục (phim lẻ, phim bộ, hoạt hình, tv-shows)
 * Có dạng table và grid
 * Có pagination
 */
export async function getServerSideProps(context) {
  const { category } = context.params;
  const { page } = context.query;
  const movies = await getMoviesByCategory(category, page)

  return {
    props: {
      movies: movies,
      category: category
    }
  }
}

const CategoryPage = ({ movies, category }) => {
  const { data: { items, params: { pagination } } } = movies
  console.log("🚀 ~ CategoryPage ~ items:", items)
  return (
    <div className="container mx-auto px-10 py-20 bg-gray-950">
      <div className="mb-10 grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {
          items.map((item, index) => (
            <React.Fragment key={index}>
              <MovieCardBase movie={item} />
            </React.Fragment>
          ))
        }
      </div>
      <ThePagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} url={`/${category}`} />
    </div>
  )
}

export default CategoryPage