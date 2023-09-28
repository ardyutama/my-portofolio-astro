import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    output: 'static',
  adapter: vercelStatic(),
  integrations: [tailwind()]
});