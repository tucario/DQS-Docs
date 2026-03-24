// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dqs-documentation-f8780a.gitlab.io',
	outDir: './public',
	publicDir: './static',
	integrations: [
		starlight({
			title: 'Data Quality Sense Docs',
			logo: {
				src: './src/assets/logo.svg',
			},
			favicon: 'favicon.svg',
			customCss: ['./src/styles/custom.css'],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				Head: './src/components/Head.astro',
			},
			social: [
				{ icon: 'external', label: 'dataqualitysense.com', href: 'https://dataqualitysense.com' },
			],
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				de: { label: 'Deutsch', lang: 'de' },
				fr: { label: 'Français', lang: 'fr' },
				es: { label: 'Español', lang: 'es' },
				ja: { label: '日本語', lang: 'ja' },
				pt: { label: 'Português', lang: 'pt' },
				pl: { label: 'Polski', lang: 'pl' },
				ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
			},
			sidebar: [
				{
					label: 'Getting Started',
					translations: {
						de: 'Erste Schritte',
						fr: 'Démarrage',
						es: 'Primeros pasos',
						ja: 'はじめに',
						pt: 'Primeiros passos',
						pl: 'Pierwsze kroki',
						ar: 'البداية',
					},
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Permissions', slug: 'getting-started/permissions' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Builder',
					translations: {
						de: 'Builder',
						fr: 'Builder',
						es: 'Builder',
						ja: 'ビルダー',
						pt: 'Builder',
						pl: 'Builder',
						ar: 'المنشئ',
					},
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
					translations: {
						de: 'Fähigkeiten',
						fr: 'Capacités',
						es: 'Capacidades',
						ja: '機能',
						pt: 'Capacidades',
						pl: 'Możliwości',
						ar: 'القدرات',
					},
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
					translations: {
						de: 'Verarbeitung',
						fr: 'Traitement',
						es: 'Procesamiento',
						ja: '処理',
						pt: 'Processamento',
						pl: 'Przetwarzanie',
						ar: 'المعالجة',
					},
					items: [
						{ label: 'Overview', slug: 'processing/overview' },
						{ label: 'Scheduling', slug: 'processing/scheduling' },
						{ label: 'Data Retention', slug: 'processing/data-retention' },
						{ label: 'Error Management', slug: 'processing/error-management' },
					],
				},
				{
					label: 'Reference',
					translations: {
						de: 'Referenz',
						fr: 'Référence',
						es: 'Referencia',
						ja: 'リファレンス',
						pt: 'Referência',
						pl: 'Referencja',
						ar: 'المرجع',
					},
					items: [
						{ label: 'Regex Tester', slug: 'reference/regex-tester' },
						{ label: 'Data Model', slug: 'reference/data-model' },
						{ label: 'Limits', slug: 'reference/limits' },
						{ label: 'FAQ', slug: 'reference/faq' },
					],
				},
			],
		}),
	],
});
