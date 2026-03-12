/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  // Silence Turbopack complaint when a webpack hook is present.
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

