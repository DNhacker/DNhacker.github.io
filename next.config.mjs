/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/protfolio' : '',
  assetPrefix: isGithubPages ? '/protfolio/' : '',
};

module.exports = nextConfig;
