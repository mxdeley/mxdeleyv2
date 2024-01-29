/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "i2-prod.walesonline.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.berkeleygroup.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.fromthemurkydepths.co.uk",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
    ],
  },
};

export default nextConfig;
