// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zigikralj.github.io', // Change this to your custom domain or https://<username>.github.io
  base: '/zigicode',                   // Change to '/<repo-name>' if deploying to a GitHub project repository (not custom domain)
  output: 'static',
});
