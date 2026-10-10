import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        hostname: "assets.tcgdex.net",
      },
    ],
  },
};

export default nextConfig;
