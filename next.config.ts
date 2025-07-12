import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'api.microlink.io', // Microlink Image Preview
      'i.pinimg.com', // Pinterest CDN
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
