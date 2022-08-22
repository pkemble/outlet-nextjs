/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
  },
}
