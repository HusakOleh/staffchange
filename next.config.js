/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'ee', 'pl', 'ru', 'ua'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig