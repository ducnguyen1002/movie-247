/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        hostname: "phimimg.com",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
