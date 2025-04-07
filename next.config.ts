import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
      type: "asset/resource", // File akan di-output sebagai aset terpisah
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
