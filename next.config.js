
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'export',
  basePath: '/portfolio', // Cambia esto al nombre de tu repositorio
  assetPrefix: '/portfolio/', // Igual que basePath
  images: {
    unoptimized: true,
  },

}

module.exports = nextConfig
