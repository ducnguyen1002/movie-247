import { axiosInstance } from "@/lib/axiosInstance";
import { DEFAULT_MOVIE_LIMIT, MOVIE_CATEGORIES } from "@/lib/constants";

export const getNewUpdatedMovies = async (page = 1) => {
  try {
    const response = await axiosInstance.get(`danh-sach/phim-moi-cap-nhat?page=${page}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getMoviesByCategory = async (category = MOVIE_CATEGORIES[0].slug, page = 1, limit = DEFAULT_MOVIE_LIMIT) => {
  try {
    const response = await axiosInstance.get(`v1/api/danh-sach/${category}?page=${page}&limit=${limit}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getMoviesDetailBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`phim/${slug}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

export const searchMoviesByKeyword = async (keyword = "", page = 1) => {
  try {
    const response = await axiosInstance.get(`v1/api/tim-kiem?keyword=${keyword}&page=${page}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

export const searchMoviesByNation = async (nation = "", page = 1) => {
  try {
    const response = await axiosInstance.get(`v1/api/quoc-gia/${nation}?limit=${DEFAULT_MOVIE_LIMIT}&page=${page}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

export const searchMoviesByGenre = async (genre = "", page = 1) => {
  try {
    const response = await axiosInstance.get(`v1/api/the-loai/${genre}?limit=${DEFAULT_MOVIE_LIMIT}&page=${page}`);
    return response
  } catch (error) {
    console.log(error)
  }
}