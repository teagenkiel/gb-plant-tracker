/** @type {import('next').NextConfig} */
await import("./src/env.mjs");

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
