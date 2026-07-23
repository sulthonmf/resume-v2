import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Add your computer's IP address to allowedDevOrigins
  // This allows the iframe on your project page to load your live website
  allowedDevOrigins: ['192.168.1.15'],
};

export default nextConfig;
