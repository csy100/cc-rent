This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Docker 部署

多阶段构建：`bun` 构建静态站点（`output: export`），`nginx` 托管产物，容器内监听 80 端口。

```bash
# 构建镜像
docker build -t cc-rent .

# 运行容器：宿主机 3008 端口映射到容器 80 端口
docker run -d --name cc-rent -p 3008:80 cc-rent
```

浏览器访问 [http://localhost:3008](http://localhost:3008)。

常用命令：

```bash
docker logs cc-rent        # 查看日志
docker stop cc-rent        # 停止容器
docker rm cc-rent          # 删除容器
```

更新部署（重新构建后替换旧容器）：

```bash
docker build -t cc-rent .
docker rm -f cc-rent
docker run -d --name cc-rent -p 3008:80 cc-rent
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
