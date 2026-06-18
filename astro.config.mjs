import { defineConfig } from 'astro/config';

const repoName = process.env.PUBLIC_REPO_NAME || 'portfolio';
const site = process.env.PUBLIC_SITE_URL || `https://wyp-design.github.io/${repoName}`;

export default defineConfig({
  site,
  base: process.env.PUBLIC_BASE_PATH || `/${repoName}`,
  trailingSlash: 'never'
});
