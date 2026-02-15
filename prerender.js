/**
 * prerender.js — Static Site Generation script
 *
 * Runs after Vite builds the client and SSR bundles.
 * For each route it:
 *   1. Imports the render(url) function from the SSR bundle
 *   2. Renders the route to an HTML string
 *   3. Injects the HTML into the template (replacing <!--app-html-->)
 *   4. Writes the result to dist/{route}/index.html
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Browser API polyfills (MUST run before importing SSR bundle) ──
const store = {};
globalThis.localStorage = {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => { store[k] = v; },
    removeItem: (k) => { delete store[k]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key: (i) => Object.keys(store)[i] ?? null,
};

const docEl = {
    dir: 'rtl',
    lang: 'he',
    getAttribute: (name) => docEl[name] ?? null,
    setAttribute: (name, value) => { docEl[name] = value; },
    style: {},
};
globalThis.document = {
    documentElement: docEl,
    referrer: '',
    scripts: [],
    head: { appendChild: () => { } },
    body: { appendChild: () => { } },
    createElement: (tag) => ({
        tagName: tag, async: false, src: '', style: {},
        setAttribute: () => { }, getAttribute: () => null,
        appendChild: () => { }, addEventListener: () => { },
        removeEventListener: () => { },
    }),
    createTextNode: (text) => ({ textContent: text }),
    getElementById: () => null,
    getElementsByTagName: () => [{ parentNode: { insertBefore: () => { } } }],
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => { },
    removeEventListener: () => { },
};

globalThis.window = globalThis;
globalThis.innerWidth = 1024;
globalThis.innerHeight = 768;
globalThis.scrollY = 0;
globalThis.scrollTo = () => { };
globalThis.addEventListener = () => { };
globalThis.removeEventListener = () => { };

globalThis.matchMedia = (_q) => ({
    matches: false, media: _q, onchange: null,
    addListener: () => { }, removeListener: () => { },
    addEventListener: () => { }, removeEventListener: () => { },
    dispatchEvent: () => false,
});

// navigator polyfill (read-only in Node.js v25+, need defineProperty)
try {
    Object.defineProperty(globalThis, 'navigator', {
        value: { userAgent: 'node', language: 'he', languages: ['he'] },
        writable: true,
        configurable: true,
    });
} catch (e) {
    // navigator already exists and is fine
}

globalThis.HTMLElement = class HTMLElement { };
globalThis.SVGElement = class SVGElement { };
globalThis.Element = class Element { };

globalThis.IntersectionObserver = class IntersectionObserver {
    constructor() { }
    observe() { }
    unobserve() { }
    disconnect() { }
};

globalThis.ResizeObserver = class ResizeObserver {
    constructor() { }
    observe() { }
    unobserve() { }
    disconnect() { }
};

globalThis.MutationObserver = class MutationObserver {
    constructor() { }
    observe() { }
    disconnect() { }
    takeRecords() { return []; }
};

globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
globalThis.getComputedStyle = () => ({
    getPropertyValue: () => '',
});

// ─── Routes to prerender ───────────────────────────────────────
const staticRoutes = [
    '/',
    '/about',
    '/kitchens',
    '/projects',
    '/contact',
    '/promotions',
    '/installation',
    '/magazine',
    '/blog',
    '/closets',
    '/calculator',
    '/quiz-selection',
];

const kitchenCategories = ['modern', 'country', 'formica', 'wood', 'nano', 'acrylic'];

const blogSlugs = [
    'kitchen-demolition-guide',
    'kitchen-plumbing-prep',
    'kitchen-electrical-plan',
    'kitchen-walls-prep',
    'kitchen-flooring-guide',
    'kitchen-installation-access',
    'custom-closets-guide',
    'bedroom-closet-guide',
    'hallway-closet-guide',
    'guest-room-sliding-closet',
];

const routes = [
    ...staticRoutes,
    ...kitchenCategories.map(c => `/kitchens/${c}`),
    ...blogSlugs.map(s => `/blog/${s}`),
];

// ─── Main ──────────────────────────────────────────────────────
async function prerender() {
    const distDir = path.resolve(__dirname, 'dist');
    const serverDir = path.resolve(__dirname, 'dist/server');

    // Read the client-built index.html as template
    const templatePath = path.resolve(distDir, 'index.html');
    if (!fs.existsSync(templatePath)) {
        console.error('❌ dist/index.html not found. Run `vite build` first.');
        process.exit(1);
    }
    const template = fs.readFileSync(templatePath, 'utf-8');

    // Import the SSR render function
    const entryPath = path.resolve(serverDir, 'entry-server.js');
    if (!fs.existsSync(entryPath)) {
        console.error('❌ dist/server/entry-server.js not found. Run `vite build --ssr` first.');
        process.exit(1);
    }
    const { render } = await import(pathToFileURL(entryPath).href);

    let successCount = 0;
    let failCount = 0;

    for (const route of routes) {
        try {
            const appHtml = render(route);

            // Primary: replace <!--app-html--> placeholder
            let html = template.replace('<!--app-html-->', appHtml);

            // Fallback: if placeholder was missing, inject into empty root div
            if (html === template) {
                html = template.replace(
                    '<div id="root"></div>',
                    `<div id="root">${appHtml}</div>`
                );
            }

            // Determine output path
            const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
            const filePath = path.join(distDir, routePath);

            // Ensure directory exists
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, html);

            // Verification
            const stats = fs.statSync(filePath);
            const contentLen = appHtml.length;
            if (contentLen < 100) {
                console.warn(`⚠️  ${route} — rendered content suspiciously small (${contentLen} bytes)`);
            }
            console.log(`✅ ${route} → ${routePath} (${(stats.size / 1024).toFixed(1)} KB, content: ${contentLen} chars)`);
            successCount++;
        } catch (err) {
            console.error(`❌ ${route} — ${err.message}`);
            failCount++;
        }
    }

    console.log(`\n🏁 SSG complete: ${successCount} succeeded, ${failCount} failed out of ${routes.length} routes.`);
    if (failCount > 0) process.exit(1);
}

prerender();
