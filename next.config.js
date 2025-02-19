/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'premium.w3ipfs.storage',
        pathname: '/ipfs/**',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.aioz.network',
        pathname: '/ipfs/**',
      },
    ],
  },
}

module.exports = nextConfig 