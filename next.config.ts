import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/131x36qq/production/**', 
        search: '',
      },
    ],  
  },
};

export default nextConfig;


