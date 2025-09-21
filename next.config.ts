import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 2678400,
    deviceSizes: [320, 640, 1024, 1920],
    imageSizes: [16, 32, 48, 64, 128, 256],
    remotePatterns: [
      // Dodaj tu tylko domeny, z których faktycznie pobierasz obrazy
      // { protocol: 'https', hostname: 'twojadomena.pl' },
    ],
    localPatterns: [{ pathname: "/public/**" }],
  },
};

export default nextConfig;
