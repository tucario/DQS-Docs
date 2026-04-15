// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tucario.github.io',
	outDir: './public',
	publicDir: './static',
	integrations: [
		starlight({
			title: 'Data Quality Sense Documentation',
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
				{ icon: 'download', label: 'Download PDF', href: '/data-quality-sense-documentation.pdf' },
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
						{ slug: 'index' },
						{ slug: 'getting-started/installation' },
						{ slug: 'getting-started/permissions' },
						{ slug: 'getting-started/quick-start' },
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
						{ slug: 'builder/overview' },
						{ slug: 'builder/creating-definition' },
						{ slug: 'builder/field-selection' },
						{ slug: 'builder/capabilities' },
						{ slug: 'builder/lifecycle' },
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
						{ slug: 'capabilities/overview' },
						{ slug: 'capabilities/completeness' },
						{ slug: 'capabilities/validity' },
						{ slug: 'capabilities/uniqueness' },
						{ slug: 'capabilities/timeliness' },
						{ slug: 'capabilities/consistency' },
						{ slug: 'capabilities/pii-detection' },
					],
				},
				{
					label: 'Insight Studio',
					translations: {
						de: 'Insight Studio',
						fr: 'Insight Studio',
						es: 'Insight Studio',
						ja: 'Insight Studio',
						pt: 'Insight Studio',
						pl: 'Insight Studio',
						ar: 'Insight Studio',
					},
					items: [
						{ slug: 'insight-studio/overview' },
						{ slug: 'insight-studio/navigation' },
						{ slug: 'insight-studio/scores-trends' },
						{ slug: 'insight-studio/field-health' },
						{ slug: 'insight-studio/actions' },
						{ slug: 'insight-studio/exports' },
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
						{ slug: 'processing/overview' },
						{ slug: 'processing/scheduling' },
						{ slug: 'processing/data-retention' },
						{ slug: 'processing/error-management' },
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
						{ slug: 'reference/regex-tester' },
						{ slug: 'reference/data-model' },
						{ slug: 'reference/limits' },
						{ slug: 'reference/known-issues' },
						{ slug: 'reference/faq' },
					],
				},
			],
		}),
	],
});
