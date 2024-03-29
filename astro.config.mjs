import tailwindIntegration from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwindIntegration()],
  vite: {
    server: {
      open: true,
    },
  },
});
