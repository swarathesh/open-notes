/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    domains: ['lh3.googleusercontent.com']
  },
    source: '/api/prompt',
    headers: [
      {
        key: 'Cache-Control',
        value: 'no-store, max-age=0',
      },
    ]
  }

  
module.exports = nextConfig
