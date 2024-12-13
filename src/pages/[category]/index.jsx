import React from 'react';
import { getMoviesByCategory } from '@/services/movie';
import ThePagination from '@/components/common/the-pagination';
import MovieCardBase from '@/components/ui/MovieCardBase';
import Head from 'next/head';
import { MOVIE_CATEGORIES, REVALIDATION_TIME } from '@/lib/constants';

export async function getStaticPaths() {
  const paths = Object.values(MOVIE_CATEGORIES).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const page = context.query?.page || 1;

  const movies = await getMoviesByCategory(category, page);

  return {
    props: {
      movies: movies || [],
      category,
    },
    revalidate: REVALIDATION_TIME,
  };
}

const CategoryPage = ({ movies, category }) => {
  const { data: { items, seoOnPage, params: { pagination } } } = movies;

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
        <div className="mb-10 grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <MovieCardBase movie={item} />
            </React.Fragment>
          ))}
        </div>
        <ThePagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          url={`/${category}`}
        />
      </div>
    </>
  );
};

export default CategoryPage;