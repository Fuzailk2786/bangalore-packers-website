/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // This tells Turbopack to use the directory where 
    // this config file is located as the root.
    root: __dirname,
  },
};

module.exports = nextConfig;
