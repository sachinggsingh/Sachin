import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'api.microlink.io', // Microlink Image Preview
    ],
  },
};
module.exports = nextConfig;

export default nextConfig;
