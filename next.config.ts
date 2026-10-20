import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 纯静态站点：构建产物输出到 out/，直接由 nginx 等静态服务器托管
  // 注意：export 模式不支持 PPR，需关闭 cacheComponents / partialPrefetching
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
