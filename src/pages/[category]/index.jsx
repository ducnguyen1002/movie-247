import React from 'react';
import { getMoviesByCategory } from '@/services/movie';
import ThePagination from '@/components/common/the-pagination';
import MovieCardBase from '@/components/ui/MovieCardBase';
import Head from 'next/head';
import { DEFAULT_MOVIE_LIMIT, MOVIE_CATEGORIES } from '@/lib/constants';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links';

export async function getServerSideProps(context) {
  const { category } = context.params;
  const page = context.query.page || 1;

  const movies = await getMoviesByCategory(category, page);

  if (!movies) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movies,
      categorySlug: category,
      page: Number(page),
    },
  };
}

const CategoryPage = ({ movies, categorySlug, page }) => {
  const { data: { items, seoOnPage, params: { pagination: { totalItems } } } } = movies;
  const category = MOVIE_CATEGORIES.find(cat => cat.slug === categorySlug);

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
        <h1 className="mb-2 font-semibold text-3xl text-white text-center">{category.name}</h1>
        <hr className="mx-auto mb-6 w-1/4 h-[1px] border-0 bg-gradient-to-r from-gray-700 via-gray-200 to-gray-700" />
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

export default CategoryPage;