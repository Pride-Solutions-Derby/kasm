/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Pride Solutions Derby Registry',
    description: 'The official store for Pride Solutions Derby workspaces.',
    icon: 'https://pride-solutions-derby.github.io/kasm/1.0/kasm_logo.svg',
    listUrl: 'https://pride-solutions-derby.github.io/kasm/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
