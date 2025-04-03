import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    granularChunks: true, // Reduces large Webpack chunks
  },
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 24400000, // Keep chunks under 24MB
    };
    return config;
  },
}

export default withPayload(nextConfig)
