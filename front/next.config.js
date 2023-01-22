/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_NAME: process.env.REACT_APP_SERVER_NAME,
  },
  async rewrites() {
    return [{
        source: '/api/:path*',
        destination: 'http://localhost:4200/api/:path*',
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*',
      },
    ]
  }
}

module.exports = nextConfig