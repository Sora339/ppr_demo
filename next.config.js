/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true, // Partial Prerendering有効化
    dynamicIO: true, // Dynamic IO有効化
  },
  output: 'standalone', // Windowsのファイルロック問題を回避
};

module.exports = nextConfig;
