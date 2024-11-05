import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://amentikkenea.netlify.app/',
  output: 'static',
  adapter: netlify()
});