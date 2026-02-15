// SSG entry point — used by prerender.js via `vite build --ssr`
// NOTE: Browser polyfills are applied in prerender.js BEFORE this module is imported.

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';

export function render(url: string): string {
    return ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <AppRoutes />
        </StaticRouter>
    );
}
