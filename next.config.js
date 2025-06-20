/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.prod.website-files.com'],
  },
}

module.exports = nextConfig 