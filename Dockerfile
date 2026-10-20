# ============================================================
# one-scent — Next.js 静态导出 + nginx 托管
# 构建：bun 安装依赖并 next build（output: export → /app/out）
# 运行：nginx 直接托管静态产物，监听 3007
# ============================================================

# ---------- 构建阶段 ----------
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# 先装依赖（利用层缓存）
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# 拷源码并构建静态站点
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# ---------- 运行阶段 ----------
FROM nginx:alpine

# 静态导出产物 → nginx 根目录
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# 用 127.0.0.1 而非 localhost：alpine 的 busybox wget 会先试 ::1，
# nginx 只监听 IPv4 时会直接报连接拒绝
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:80/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
