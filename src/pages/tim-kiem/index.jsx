import ThePagination from '@/components/common/the-pagination';
import MovieCardBase from '@/components/ui/MovieCardBase';
import Head from 'next/head';
import React from 'react'
import { searchMoviesByKeyword } from '@/services/movie';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';
import { DEFAULT_MOVIE_LIMIT } from '@/lib/constants';

/**
 * Trang để hiển thị các kết quả tìm kiếm theo tên
 * Limit = 20
 * Có pagination
 */

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const keyword = context.query.q || "";

  const movies = await searchMoviesByKeyword(keyword, page);

  return {
    props: {
      movies: movies || {},
      keyword,
      page
    },
  };
}

const SearchPage = ({ movies, keyword, page }) => {
  const { data: { items, seoOnPage, params: { pagination: { totalItems } } } } = movies;

  return (
    <>
      <Head>
        <title>{seoOnPage.titleHead}</title>
        <meta name="description" content={seoOnPage.descriptionHead} />
        <meta property="og:type" content={seoOnPage.og_type} />
        <meta property="og:url" content={seoOnPage.og_url} />
        <meta property="og:image" content={seoOnPage.og_images} />
      </Head>
      <div className="container mx-auto px-4 py-16 lg:px-10 lg:py-20 bg-gray-950">
        <p className="mb-4 text-white">
          {
            totalItems ? `Tìm thấy ${totalItems} kết quả cho từ khóa` : `Không tìm thấy kết quả nào cho từ khóa`
          }
          <strong> {keyword}!</strong>
        </p>

        <div className="min-h-[60vh] mb-10 grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <MovieCardBase movie={item} />
            </React.Fragment>
          ))}
        </div>
        <PaginationWithLinks page={page} pageSize={DEFAULT_MOVIE_LIMIT} totalCount={totalItems} />
      </div>
    </>
  );
};

export default SearchPage;
