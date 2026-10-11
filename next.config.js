/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Static export has no image optimization server — images are served as-is.
    unoptimized: true,
    // Still enforced even when unoptimized: allow product photos hosted on Cloudinary.
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig
