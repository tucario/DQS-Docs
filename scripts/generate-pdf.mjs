import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outputPath = join(root, 'public', 'data-quality-sense-documentation.pdf');

const PORT = 4322;

function startPreviewServer() {
	return new Promise((resolve, reject) => {
		const child = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
			cwd: root,
			stdio: ['ignore', 'pipe', 'pipe'],
		});

		let started = false;

		const onData = (data) => {
			if (!started && data.toString().includes('localhost')) {
				started = true;
				resolve(child);
			}
		};

		child.stdout.on('data', onData);
		child.stderr.on('data', onData);
		child.on('error', reject);

		setTimeout(() => {
			if (!started) {
				started = true;
				resolve(child);
			}
		}, 5000);
	});
}

async function generatePdf() {
	console.log('Starting preview server...');
	const server = await startPreviewServer();

	const url = `http://localhost:${PORT}/print/`;
	console.log(`Preview running at ${url}`);

	try {
		console.log('Launching browser...');
		const browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
			protocolTimeout: 300000,
		});

		const page = await browser.newPage();

		// Large viewport to help with rendering
		await page.setViewport({ width: 1200, height: 800 });

		console.log('Loading print page...');
		await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });

		// Remove loading="lazy", inline dimensions, and force sizing on all images
		console.log('Forcing image loading...');
		await page.evaluate(() => {
			document.querySelectorAll('img').forEach((img) => {
				img.removeAttribute('loading');
				img.removeAttribute('width');
				img.removeAttribute('height');
				img.style.setProperty('max-width', '90%', 'important');
				img.style.setProperty('width', 'auto', 'important');
				img.style.setProperty('height', 'auto', 'important');
				img.style.setProperty('margin-left', 'auto', 'important');
				img.style.setProperty('margin-right', 'auto', 'important');
				img.style.setProperty('display', 'block', 'important');
				// Force reload by resetting src
				const src = img.src;
				img.src = '';
				img.src = src;
			});
		});

		// Scroll through the entire page to trigger any remaining lazy loads
		await page.evaluate(async () => {
			await new Promise((resolve) => {
				let totalHeight = 0;
				const distance = 500;
				const timer = setInterval(() => {
					window.scrollBy(0, distance);
					totalHeight += distance;
					if (totalHeight >= document.body.scrollHeight) {
						clearInterval(timer);
						window.scrollTo(0, 0);
						resolve();
					}
				}, 50);
			});
		});

		// Wait for all images to finish loading
		console.log('Waiting for images to load...');
		await page.evaluate(async () => {
			const images = Array.from(document.querySelectorAll('img'));
			await Promise.allSettled(
				images.map((img) => {
					if (img.complete) return Promise.resolve();
					return new Promise((resolve) => {
						img.addEventListener('load', resolve, { once: true });
						img.addEventListener('error', resolve, { once: true });
						// Timeout per image
						setTimeout(resolve, 10000);
					});
				})
			);
		});

		// Extra settle time
		await new Promise((r) => setTimeout(r, 2000));

		const imgCount = await page.evaluate(() => {
			const imgs = document.querySelectorAll('img');
			const loaded = Array.from(imgs).filter((i) => i.complete && i.naturalWidth > 0).length;
			return { total: imgs.length, loaded };
		});
		console.log(`Images: ${imgCount.loaded}/${imgCount.total} loaded`);

		console.log('Generating PDF...');
		await page.pdf({
			path: outputPath,
			format: 'A4',
			printBackground: true,
			margin: {
				top: '1.5cm',
				right: '1.5cm',
				bottom: '1.5cm',
				left: '1.5cm',
			},
			displayHeaderFooter: true,
			headerTemplate: '<div></div>',
			footerTemplate: `
				<div style="width:100%;font-size:8px;color:#94a3b8;text-align:center;padding:0 1.5cm;">
					<span>Data Quality Sense Documentation</span>
					<span style="float:right;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
				</div>
			`,
			timeout: 120000,
		});

		console.log(`PDF saved to: ${outputPath}`);
		await browser.close();
	} finally {
		server.kill();
	}

	console.log('Done.');
	process.exit(0);
}

generatePdf().catch((err) => {
	console.error('PDF generation failed:', err);
	process.exit(1);
});
