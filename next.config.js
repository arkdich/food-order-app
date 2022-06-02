/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  // basePath: '/food-order-app',
  // compiler: {
  //   styledComponents: true,
  // },
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
      },
      {
        test: /\.test.js$/,
        loader: 'ignore-loader',
      }
    );

    return config;
  },
};

module.exports = nextConfig;
