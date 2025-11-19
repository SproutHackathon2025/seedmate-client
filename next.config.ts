import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    if (process.env.NEXT_PUBLIC_API_BASE_URL) {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
        },
      ]
    }
    return []
  },
}

export default nextConfig
