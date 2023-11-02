import { join } from 'path';
import type { Config } from 'tailwindcss';
// @ts-ignore
import forms from '@tailwindcss/forms';
// @ts-ignore
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import lineClamp from '@tailwindcss/line-clamp';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		lineClamp,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'wintry',
						enhancements: true
					},
					{
						name: 'crimson',
						enhancements: true
					},
					{
						name: 'seafoam',
						enhancements: true
					},
					{
						name: 'rocket',
						enhancements: true
					},
					{
						name: 'modern',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
