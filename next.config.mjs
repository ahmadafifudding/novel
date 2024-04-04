/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '15.235.168.88',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
}

export default nextConfig
