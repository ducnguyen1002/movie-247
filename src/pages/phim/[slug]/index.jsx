import Head from 'next/head';
import { HeroSingleMovie } from '@/components/common/hero-slider';
import MovieDetailTable from '@/components/common/movie-detail-table';
import MovieSliderBasic from '@/components/common/movie-slider-basic';
import { getMoviesDetailBySlug, getNewUpdatedMovies } from '@/services/movie';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { movie, episodes } = await getMoviesDetailBySlug(slug);
  const newMovies = await getNewUpdatedMovies();

  return {
    props: {
      slug,
      movie,
      episodes,
      newMovies,
    },
  };
}

const MovieDetailPage = ({ movie, slug, episodes, newMovies }) => {
  return (
    <>
      <Head>
        <title>Movie 247 | {movie.name}</title>
        <meta name="description" content={movie.content} />
        <meta property="og:title" content={`Movie 247 | ${movie.name}`} />
        <meta property="og:description" content={movie.content} />
        <meta property="og:image" content={movie.poster_url || '/default-poster.jpg'} />
        <meta property="og:image:width" content={'1200'} />
        <meta property="og:image" content={'630'} />
      </Head>
      <div>
        <HeroSingleMovie movie={movie} primaryBtnTitle="Xem ngay" primaryBtnURL={`/phim/${slug}/watch`} />
        <div className="container mx-auto px-4 lg:px-10 py-10 bg-gray-950">
          <div className="overflow-x-auto">
            <MovieDetailTable movie={movie} />
          </div>
        </div>
        <MovieSliderBasic movies={newMovies.items} title={"Phim mới cập nhật"} />
      </div>
    </>
  );
};

export default MovieDetailPage;
