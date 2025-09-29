import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com","encrypted-tbn0.gstatic.com","www.darulmadinah.net",'images.unsplash.com',"darulmadinah.edu.in","pbs.twimg.com","https://img.freepik.com"],
  },
};

export default nextConfig;
