/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true, // Partial Prerendering有効化
  },
  output: 'standalone', // Windowsのファイルロック問題を回避
};

module.exports = nextConfig;
