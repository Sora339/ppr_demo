/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ppr: true, // Partial Prerendering有効化
    cacheComponents: true, // 旧 dynamicIO
  },
  output: 'standalone', // Windowsのファイルロック問題を回避
};

module.exports = nextConfig;
