
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const APP_DOMAIN_CDN_IMAGE = "https://phimimg.com/"
export const REVALIDATION_TIME = 7200
export const DEFAULT_MOVIE_LIMIT = 20
export const DEFAULT_THUMB_URL = "/assets/images/placeholder/movie_thumb_placeholder.jpg"

export const MOVIE_CATEGORIES = [
  {
    name: "Phim lẻ",
    slug: "phim-le",
  },
  {
    name: "Phim bộ",
    slug: "phim-bo",
  },
  {
    name: "Hoạt hình",
    slug: "hoat-hinh",
  },
  {
    name: "TV Shows",
    slug: "tv-shows",
  },
]

export const NATIONS = [
  { name: "Trung Quốc", slug: "trung-quoc" },
  { name: "Thái Lan", slug: "thai-lan" },
  { name: "Hồng Kông", slug: "hong-kong" },
  { name: "Pháp", slug: "phap" },
  { name: "Đức", slug: "duc" },
  { name: "Hà Lan", slug: "ha-lan" },
  { name: "Mexico", slug: "mexico" },
  { name: "Thụy Điển", slug: "thuy-dien" },
  { name: "Philippines", slug: "philippines" },
  { name: "Đan Mạch", slug: "dan-mach" },
  { name: "Thụy Sĩ", slug: "thuy-si" },
  { name: "Ukraina", slug: "ukraina" },
  { name: "Hàn Quốc", slug: "han-quoc" },
  { name: "Âu Mỹ", slug: "au-my" },
  { name: "Ấn Độ", slug: "an-do" },
  { name: "Canada", slug: "canada" },
  { name: "Tây Ban Nha", slug: "tay-ban-nha" },
  { name: "Indonesia", slug: "indonesia" },
  { name: "Ba Lan", slug: "ba-lan" },
  { name: "Malaysia", slug: "malaysia" },
  { name: "Bồ Đào Nha", slug: "bo-dao-nha" },
  { name: "UAE", slug: "uae" },
  { name: "Châu Phi", slug: "chau-phi" },
  { name: "Ả Rập Xê Út", slug: "a-rap-xe-ut" },
  { name: "Nhật Bản", slug: "nhat-ban" },
  { name: "Đài Loan", slug: "dai-loan" },
  { name: "Anh", slug: "anh" },
  { name: "Thổ Nhĩ Kỳ", slug: "tho-nhi-ky" },
  { name: "Nga", slug: "nga" },
  { name: "Úc", slug: "uc" },
  { name: "Brazil", slug: "brazil" },
  { name: "Ý", slug: "y" },
  { name: "Na Uy", slug: "na-uy" },
  { name: "Nam Phi", slug: "nam-phi" },
  { name: "Việt Nam", slug: "viet-nam" },
  { name: "Quốc Gia Khác", slug: "quoc-gia-khac" }
]

export const GENRES = [
  { name: "Hành Động", slug: "hanh-dong" },
  { name: "Cổ Trang", slug: "co-trang" },
  { name: "Chiến Tranh", slug: "chien-tranh" },
  { name: "Viễn Tưởng", slug: "vien-tuong" },
  { name: "Kinh Dị", slug: "kinh-di" },
  { name: "Tài Liệu", slug: "tai-lieu" },
  { name: "Bí Ẩn", slug: "bi-an" },
  { name: "Phim 18+", slug: "phim-18" },
  { name: "Tình Cảm", slug: "tinh-cam" },
  { name: "Tâm Lý", slug: "tam-ly" },
  { name: "Thể Thao", slug: "the-thao" },
  { name: "Phiêu Lưu", slug: "phieu-luu" },
  { name: "Âm Nhạc", slug: "am-nhac" },
  { name: "Gia Đình", slug: "gia-dinh" },
  { name: "Học Đường", slug: "hoc-duong" },
  { name: "Hài Hước", slug: "hai-huoc" },
  { name: "Hình Sự", slug: "hinh-su" },
  { name: "Võ Thuật", slug: "vo-thuat" },
  { name: "Khoa Học", slug: "khoa-hoc" },
  { name: "Thần Thoại", slug: "than-thoai" },
  { name: "Chính Kịch", slug: "chinh-kich" },
  { name: "Kinh Điển", slug: "kinh-dien" }

]

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
  {
    name: "Quốc gia",
    link: "/quoc-gia",
  },
  {
    name: "Thể loại",
    link: "/the-loai",
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