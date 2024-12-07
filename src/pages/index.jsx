import dynamic from 'next/dynamic';

const BrandMarquee = dynamic(() => import('@/components/common/brand-marquee'));
const HeroSlider = dynamic(() => import('@/components/common/hero-slider'));
const MovieSliderBasic = dynamic(() => import('@/components/common/movie-slider-basic'));
const MovieSliderPrimary = dynamic(() => import('@/components/common/movie-slider-primary'));
const MovieSliderSecondary = dynamic(() => import('@/components/common/movie-slider-secondary'));
import { getMoviesByCategory, getNewUpdatedMovies } from "@/services/movie";

export const getServerSideProps = async () => {
  const newMovies = await getNewUpdatedMovies();
  const phimLeMovies = await getMoviesByCategory("phim-le");
  const phimBoMovies = await getMoviesByCategory("phim-bo");
  const hoathinhMovies = await getMoviesByCategory("hoat-hinh");
  const tvshowMovies = await getMoviesByCategory("tv-shows");

  return {
    props: {
      newMovies: newMovies,
      phimLeMovies: phimLeMovies,
      phimBoMovies: phimBoMovies,
      hoathinhMovies: hoathinhMovies,
      tvshowMovies: tvshowMovies,
    }
  }
}

export default function Home({
  newMovies,
  phimLeMovies,
  phimBoMovies,
  hoathinhMovies,
  tvshowMovies
}) {
  console.log("🚀 ~ getServerSideProps ~ phimLeMovies:", phimLeMovies)
  return (
    <>
      <HeroSlider movies={newMovies.items} />
      <BrandMarquee />
      <MovieSliderPrimary title={"Phim lẻ"} movies={phimLeMovies.data.items} />
      <MovieSliderSecondary movies={phimBoMovies.data.items} />
      <MovieSliderBasic title={"Hoạt hình"} movies={hoathinhMovies.data.items} />
      <MovieSliderBasic title={"TV Shows"} movies={tvshowMovies.data.items} />
    </>
  );
}
