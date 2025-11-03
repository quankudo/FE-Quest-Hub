import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "travel-spark.monamedia.net",
        port: "", // cần có dòng này để Next.js nhận chính xác
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**", // cho phép mọi đường dẫn dưới hostname này
      },
    ],
  },
};

export default nextConfig;
