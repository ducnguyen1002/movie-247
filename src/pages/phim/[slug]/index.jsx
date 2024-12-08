import { HeroSingleMovie } from '@/components/common/hero-slider';
import MovieDetailTable from '@/components/common/movie-detail-table';
import MovieSliderBasic from '@/components/common/movie-slider-basic';
import { getMoviesDetailBySlug, getNewUpdatedMovies } from '@/services/movie';

/**
 * Hiển thị chi tiết phim/ các tập nhỏ của phim
 * Hiển thị (các) tập phim
 * Hiển thị các phim cùng danh mục, thể loại
 */
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const { movie, episodes } = await getMoviesDetailBySlug(slug)
  const newMovies = await getNewUpdatedMovies();
  return {
    props: {
      slug: slug,
      movie: movie,
      episodes: episodes,
      newMovies: newMovies,
    }
  }
}
const MovieDetailPage = ({ movie, slug, episodes, newMovies }) => {
  return (
    <div className=''>
      <HeroSingleMovie movie={movie} primaryBtnTitle="Xem ngay" primaryBtnURL={`/phim/${slug}/watch`} />
      <div className="container mx-auto px-4 lg:px-10 py-10 bg-gray-950">
        <div className="overflow-x-auto">
          <MovieDetailTable movie={movie} />
        </div>
      </div>
      <MovieSliderBasic movies={newMovies.items} title={"Phim mới cập nhật"} />
    </div>
  )
}

export default MovieDetailPage