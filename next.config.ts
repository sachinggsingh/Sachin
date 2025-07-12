import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  domains: [
    "api.microlink.io", // Microlink Image Preview
  ],
};

module.exports= nextConfig;

export default nextConfig;
