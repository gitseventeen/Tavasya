/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages requires static export
  output: "export",

  // If your repo is NOT your username.github.io, add basePath and assetPrefix
  // Example: repo is https://github.com/yourname/Tavasya
  // Your site will be served from https://yourname.github.io/Tavasya
  basePath: "/Tavasya",
  assetPrefix: "/Tavasya/",

  // React strict mode
  reactStrictMode: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // headers() is not supported in static export (GitHub Pages)
  // If you deploy to Vercel/Netlify, uncomment this:
  /*
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace * with your domain in production
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ]
  },
  */
}

module.exports = nextConfig
