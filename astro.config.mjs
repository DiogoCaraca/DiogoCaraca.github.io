// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://diogocaraca.github.io',
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: { prefixDefaultLocale: false },
  },
});
