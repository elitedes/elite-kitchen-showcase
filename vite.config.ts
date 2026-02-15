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
        // Only run for client build (skip SSR build)
        if (this.environment?.name === 'ssr') return;
        try {
          const { generateSitemap } = await import('./generate-sitemap.js');
          generateSitemap();
        } catch (e) {
          console.warn('⚠️  Sitemap generation skipped:', e.message);
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
}));
