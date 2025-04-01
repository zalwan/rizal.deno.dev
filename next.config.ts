import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
