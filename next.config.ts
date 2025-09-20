import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com","encrypted-tbn0.gstatic.com",],
  },
};

export default nextConfig;
