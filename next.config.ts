import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"], // 👈 whitelist Unsplash
  },
};

export default nextConfig;
