import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import nodejs from '@astrojs/node'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	output:'hybrid',
	adapter: nodejs({
		mode: 'middleware'
	}),
	integrations: [tailwind(), react()],
});
