// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tucario.gitlab.io',
	base: '/dqs-documentation',
	outDir: './public',
	publicDir: './static',
	integrations: [
		starlight({
			title: 'Data Quality Sense Docs',
			logo: {
				src: './src/assets/logo.svg',
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			social: [
				{ icon: 'external', label: 'dataqualitysense.com', href: 'https://dataqualitysense.com' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Permissions', slug: 'getting-started/permissions' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Builder',
					items: [
						{ label: 'Overview', slug: 'builder/overview' },
						{ label: 'Creating a Definition', slug: 'builder/creating-definition' },
						{ label: 'Field Selection', slug: 'builder/field-selection' },
						{ label: 'Configuring Capabilities', slug: 'builder/capabilities' },
						{ label: 'Definition Lifecycle', slug: 'builder/lifecycle' },
					],
				},
				{
					label: 'Capabilities',
					items: [
						{ label: 'Overview', slug: 'capabilities/overview' },
						{ label: 'Completeness', slug: 'capabilities/completeness' },
						{ label: 'Validity', slug: 'capabilities/validity' },
						{ label: 'Uniqueness', slug: 'capabilities/uniqueness' },
						{ label: 'Timeliness', slug: 'capabilities/timeliness' },
						{ label: 'Consistency', slug: 'capabilities/consistency' },
						{ label: 'PII Detection', slug: 'capabilities/pii-detection' },
						{ label: 'AI Readiness', slug: 'capabilities/ai-readiness' },
					],
				},
				{
					label: 'Insight Studio',
					items: [
						{ label: 'Overview', slug: 'insight-studio/overview' },
						{ label: 'Navigation', slug: 'insight-studio/navigation' },
						{ label: 'Scores & Trends', slug: 'insight-studio/scores-trends' },
						{ label: 'Field Health', slug: 'insight-studio/field-health' },
						{ label: 'Exports', slug: 'insight-studio/exports' },
					],
				},
				{
					label: 'Processing',
					items: [
						{ label: 'Overview', slug: 'processing/overview' },
						{ label: 'Scheduling', slug: 'processing/scheduling' },
						{ label: 'Data Retention', slug: 'processing/data-retention' },
						{ label: 'Error Management', slug: 'processing/error-management' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Data Model', slug: 'reference/data-model' },
						{ label: 'Limits', slug: 'reference/limits' },
						{ label: 'FAQ', slug: 'reference/faq' },
					],
				},
			],
		}),
	],
});
