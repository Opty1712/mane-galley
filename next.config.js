/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { unoptimized: true },
  // experimental: {
  //   viewTransition: true,
  // },
};

module.exports = nextConfig;
