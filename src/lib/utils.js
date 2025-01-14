import { APP_DOMAIN_CDN_IMAGE } from "@/lib/constants";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getImgURL(imgURL) {
  if (!imgURL) return "";

  if (imgURL.startsWith('https://')) {
    return imgURL;
  } else {
    return APP_DOMAIN_CDN_IMAGE + imgURL;
  }
}
