// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zigicode.com', // Change this to your custom domain or https://<username>.github.io
  base: '/',                   // Change to '/<repo-name>' if deploying to a GitHub project repository (not custom domain)
  output: 'static',
});
