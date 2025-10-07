import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "encrypted-tbn0.gstatic.com",
      "www.darulmadinah.net",
      "darulmadinah.edu.in",
      "pbs.twimg.com",
      "img.freepik.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
      };
    }
    return config;
  },
};

export default nextConfig;