/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/august-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/august-portfolio' : '',
  outputFileTracingRoot: __dirname
}

module.exports = nextConfig