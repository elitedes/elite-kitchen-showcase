import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Sitemap generation plugin — runs after build closes
function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle: {
      sequential: true,
      order: 'post',
      async handler() {
        try {
          const { generateSitemap } = await import('./generate-sitemap.js' as string);
          generateSitemap();
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          console.warn('⚠️  Sitemap generation skipped:', message);
        }
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable CSS code splitting for lazy-loaded routes
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Core React + router — rarely changes, cache long-term
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation library — used across many pages
          'vendor-motion': ['framer-motion'],
          // UI libraries
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-tooltip'],
          // SEO + data fetching — shared across all pages
          'vendor-infra': ['react-helmet-async', '@tanstack/react-query'],
        },
      },
    },
    // Minification — esbuild is built into Vite and much faster than terser
    minify: 'esbuild',
  },
}));
