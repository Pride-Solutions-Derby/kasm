/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Pride Solutions Derby Registry',
    description: 'The official store for Pride Solutions Derby workspaces.',
    icon: 'https://github.com/Pride-Solutions-Derby/kasm/1.0/icon.png',
    listUrl: 'https://github.com/Pride-Solutions-Derby/kasm/',
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
