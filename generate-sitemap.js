/**
 * generate-sitemap.js — Dynamic sitemap.xml generator
 *
 * Scans src/pages for automatic route discovery, adds dynamic routes
 * (kitchen categories, blog posts), and writes dist/sitemap.xml.
 *
 * Run after `vite build` or as part of the SSG pipeline.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://elitedesign.co.il';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// ─── Excluded page files (error pages, non-routable) ──────────
const EXCLUDED = ['notfound', '404', '500'];

// ─── Page-to-route mapping for special cases ──────────────────
const PAGE_ROUTE_MAP = {
    'Index': '/',
    'About': '/about',
    'Kitchens': '/kitchens',
    'KitchenCategory': null, // dynamic — handled separately
    'Projects': '/projects',
    'Contact': '/contact',
    'Promotions': '/promotions',
    'Installation': '/installation',
    'InstallationChecklist': null, // sub-component, not a route
    'InstallationDiagram': null,   // sub-component, not a route
    'Magazine': '/magazine',
    'Blog': '/blog',
    'BlogPost': null, // dynamic — handled separately
    'Closets': '/closets',
    'Calculator': '/calculator',
    'QuizPage': '/quiz-selection',
};

// ─── Dynamic routes ────────────────────────────────────────────
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

// ─── Priority & changefreq rules ──────────────────────────────
function getPriority(route) {
    if (route === '/') return '1.0';
    if (route === '/kitchens' || route === '/about' || route === '/contact') return '0.9';
    if (route.startsWith('/kitchens/') || route.startsWith('/blog/') || route === '/closets') return '0.8';
    if (route === '/blog' || route === '/projects' || route === '/promotions') return '0.8';
    return '0.7';
}

function getChangefreq(route) {
    if (route === '/') return 'weekly';
    if (route === '/blog' || route === '/promotions') return 'weekly';
    if (route.startsWith('/blog/')) return 'monthly';
    return 'monthly';
}

// ─── Scan src/pages for routes ─────────────────────────────────
function discoverRoutes() {
    const pagesDir = path.resolve(__dirname, 'src/pages');
    const routes = [];

    if (!fs.existsSync(pagesDir)) {
        console.warn('⚠️  src/pages not found, using only hardcoded routes');
        return routes;
    }

    const files = fs.readdirSync(pagesDir).filter(f => /\.(tsx|ts|jsx|js)$/.test(f));

    for (const file of files) {
        const name = file.replace(/\.(tsx|ts|jsx|js)$/, '');
        const nameLower = name.toLowerCase();

        // Skip excluded pages
        if (EXCLUDED.some(ex => nameLower.includes(ex))) {
            console.log(`   ⊘ Skipped: ${name} (excluded)`);
            continue;
        }

        // Check explicit mapping
        if (name in PAGE_ROUTE_MAP) {
            const route = PAGE_ROUTE_MAP[name];
            if (route !== null) {
                routes.push(route);
                console.log(`   ✓ ${name} → ${route}`);
            } else {
                console.log(`   ⊘ ${name} (dynamic/sub-component, handled separately)`);
            }
        } else {
            // Fallback: convert PascalCase to kebab-case route
            const kebab = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            const route = `/${kebab}`;
            routes.push(route);
            console.log(`   ✓ ${name} → ${route} (auto-detected)`);
        }
    }

    return routes;
}

// ─── Generate XML with hreflang ────────────────────────────────
function generateSitemapXml(routes) {
    // For each base route, generate URL entries for all 3 languages with hreflang links
    const urls = routes.map(route => {
        const hePath = route === '/' ? '' : route;
        const ruPath = route === '/' ? '/ru' : `/ru${route}`;
        const enPath = route === '/' ? '/en' : `/en${route}`;

        return `  <url>
    <loc>${DOMAIN}${hePath || '/'}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
    <xhtml:link rel="alternate" hreflang="he" href="${DOMAIN}${hePath || '/'}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${DOMAIN}${ruPath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${enPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${hePath || '/'}" />
  </url>
  <url>
    <loc>${DOMAIN}${ruPath}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
    <xhtml:link rel="alternate" hreflang="he" href="${DOMAIN}${hePath || '/'}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${DOMAIN}${ruPath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${enPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${hePath || '/'}" />
  </url>
  <url>
    <loc>${DOMAIN}${enPath}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
    <xhtml:link rel="alternate" hreflang="he" href="${DOMAIN}${hePath || '/'}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${DOMAIN}${ruPath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}${enPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}${hePath || '/'}" />
  </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

// ─── Main ──────────────────────────────────────────────────────
export function generateSitemap() {
    console.log('\n📋 Generating sitemap.xml...');
    console.log(`   Domain: ${DOMAIN}`);
    console.log(`   Date:   ${TODAY}\n`);

    // 1. Discover static routes from src/pages
    console.log('📂 Scanning src/pages:');
    const staticRoutes = discoverRoutes();

    // 2. Add dynamic routes
    console.log('\n📂 Adding dynamic routes:');
    const dynamicRoutes = [
        ...kitchenCategories.map(c => `/kitchens/${c}`),
        ...blogSlugs.map(s => `/blog/${s}`),
    ];
    dynamicRoutes.forEach(r => console.log(`   ✓ ${r}`));

    // 3. Combine and deduplicate
    const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes])];
    allRoutes.sort((a, b) => {
        // Home first, then alphabetical
        if (a === '/') return -1;
        if (b === '/') return 1;
        return a.localeCompare(b);
    });

    // 4. Generate XML
    const xml = generateSitemapXml(allRoutes);

    // 5. Write to dist/
    const distDir = path.resolve(__dirname, 'dist');
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }
    const outputPath = path.resolve(distDir, 'sitemap.xml');
    fs.writeFileSync(outputPath, xml, 'utf-8');

    console.log(`\n✅ sitemap.xml generated: ${allRoutes.length} URLs → ${outputPath}`);
    console.log(`   File size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);

    return allRoutes.length;
}

// Allow running standalone: `node generate-sitemap.js`
if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}` ||
    process.argv[1]?.endsWith('generate-sitemap.js')) {
    generateSitemap();
}
