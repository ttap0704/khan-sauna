/** @type {import('next').NextConfig} */

const withImages = require('next-images');
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
  staticPageGenerationTimeout: 240,
};

module.exports = withImages(nextConfig);
