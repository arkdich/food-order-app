/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['dodopizza-a.akamaihd.net'],
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader',
      }
    );

    return config;
  },
};

module.exports = nextConfig;
