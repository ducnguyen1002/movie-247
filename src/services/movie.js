import { axiosInstance } from "@/lib/axiosInstance";
import { MOVIE_CATEGORIES } from "@/lib/constants";

export const getNewUpdatedMovies = async (page = 1) => {
  try {
    const response = await axiosInstance.get(`danh-sach/phim-moi-cap-nhat?page=${page}`);
    return response
  } catch (error) {
    console.log(error)
  }
}

export const getMoviesByCategory = async (category = MOVIE_CATEGORIES.PHIM_LE, page = 1, limit = 20) => {
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

export const searchMoviesByKeyword = async (keyword = "", limit = 20) => {
  try {
    const response = await axiosInstance.get(`v1/api/tim-kiem?keyword=${keyword}&limit=${limit}`);
    return response
  } catch (error) {
    console.log(error)
  }
}