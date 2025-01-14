import dynamic from 'next/dynamic';
import Head from 'next/head';

const BrandMarquee = dynamic(() => import('@/components/common/brand-marquee'), { ssr: true });
const HeroSlider = dynamic(() => import('@/components/common/hero-slider'), { ssr: true });
const MovieSliderBasic = dynamic(() => import('@/components/common/movie-slider-basic'), { ssr: false });
const MovieSliderPrimary = dynamic(() => import('@/components/common/movie-slider-primary'), { ssr: false });
const MovieSliderSecondary = dynamic(() => import('@/components/common/movie-slider-secondary'), { ssr: false });

import { getMoviesByCategory, getNewUpdatedMovies } from "@/services/movie";

export const getServerSideProps = async () => {
  const newMovies = await getNewUpdatedMovies();
  const phimLeMovies = await getMoviesByCategory("phim-le", 1, 10);
  const phimBoMovies = await getMoviesByCategory("phim-bo", 1, 10);
  const hoathinhMovies = await getMoviesByCategory("hoat-hinh", 1, 10);
  const tvshowMovies = await getMoviesByCategory("tv-shows", 1, 10);

  return {
    props: {
      newMovies: newMovies || {},
      phimLeMovies: phimLeMovies || {},
      phimBoMovies: phimBoMovies || {},
      hoathinhMovies: hoathinhMovies || {},
      tvshowMovies: tvshowMovies || {},
    },
  };
};

export default function Home({
  newMovies,
  phimLeMovies,
  phimBoMovies,
  hoathinhMovies,
  tvshowMovies
}) {
  console.log(newMovies,
    phimLeMovies,
    phimBoMovies,
    hoathinhMovies,
    tvshowMovies);

  return (
    <>
      <Head>
        <title>Movie 247</title>
        <meta name="description" content={"Xem phim miễn phí, cập nhật 24/7"} />
      </Head>
      <HeroSlider movies={newMovies?.items || []} />
      <BrandMarquee />
      <MovieSliderPrimary title={"Phim lẻ"} movies={phimLeMovies?.data?.items || []} />
      <MovieSliderSecondary movies={phimBoMovies?.data?.items || []} />
      <MovieSliderBasic title={"Hoạt hình"} movies={hoathinhMovies?.data?.items || []} />
      <MovieSliderBasic title={"TV Shows"} movies={tvshowMovies?.data?.items || []} />
    </>
  );
}
