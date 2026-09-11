import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Portfolio';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePage(name),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#3a5e34',
    },
});

function resolvePage(name: string) {
    const pages = import.meta.glob('./Pages/**/*.tsx');
    return pages[`./Pages/${name}.tsx`]?.() ??
        Promise.reject(new Error(`Página Inertia não encontrada: ${name}`));
}
