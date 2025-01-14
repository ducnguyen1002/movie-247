import Head from 'next/head';
import dynamic from 'next/dynamic';
import { HeroSingleMovie } from '@/components/common/hero-slider';
const MovieDetailTable = dynamic(() => import('@/components/common/movie-detail-table'), { ssr: true });
const MovieSliderBasic = dynamic(() => import('@/components/common/movie-slider-basic'), { ssr: true });
import { getMoviesDetailBySlug, getNewUpdatedMovies } from '@/services/movie';
import Image from 'next/image';
import { getImgURL } from '@/lib/utils';

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { movie, episodes } = await getMoviesDetailBySlug(slug);
  const newMovies = await getNewUpdatedMovies();

  return {
    props: {
      slug,
      movie,
      episodes: episodes || [],
      newMovies: newMovies || [],
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
        <meta property="og:image:height" content={'630'} />
      </Head>
      <div>
        <HeroSingleMovie movie={movie} primaryBtnTitle="Xem ngay" primaryBtnURL={`/phim/${slug}/watch`} />
        <div className="container mx-auto px-4 lg:px-10 py-10 bg-gray-950">
          <div className="overflow-x-auto flex flex-col-reverse lg:flex-row">
            <MovieDetailTable movie={movie} />
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2 flex justify-center items-center">
              <Image
                className='rounded-xl h-[560px] border-[2px] border-gray-300'
                src={getImgURL(movie.poster_url)}
                alt={movie.name}
                width={400}
                height={800}
              /></div>
          </div>
        </div>
        <MovieSliderBasic movies={newMovies.items} title={"Phim mới cập nhật"} />
      </div>
    </>
  );
};

export default MovieDetailPage;
