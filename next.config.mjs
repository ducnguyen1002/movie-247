/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
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
