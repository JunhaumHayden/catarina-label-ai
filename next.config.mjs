/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/catarina-label-ai',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
