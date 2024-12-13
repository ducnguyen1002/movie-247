
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const APP_DOMAIN_CDN_IMAGE = "https://phimimg.com/"
export const REVALIDATION_TIME = 7200

export const MOVIE_CATEGORIES = {
  PHIM_LE: "phim-le",
  PHIM_BO: "phim-bo",
  HOAT_HINH: "hoat-hinh",
  TV_SHOWS: "tv-shows"
}

export const NAV_ITEMS = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Phim lẻ",
    link: "/phim-le",
  },
  {
    name: "Phim bộ",
    link: "/phim-bo",
  },
  {
    name: "Hoạt hình",
    link: "/hoat-hinh",
  },
  {
    name: "TV shows",
    link: "/tv-shows",
  },
]

export const SOCIAL_LINKS = [
  {
    name: "facebook",
    link: "https://facebook.com/ducduc.1002",
    icon: <FaSquareFacebook className="text-base md:text-xl lg:text-2xl" />
  },
  {
    name: "google",
    link: "https://facebook.com/ducduc.1002",
    icon: <SiGmail className="text-base md:text-xl lg:text-2xl" />
  },
]