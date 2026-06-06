import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages user site - no basePath needed for gabrielhonorato8357.github.io
};

export default nextConfig;