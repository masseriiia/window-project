import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import htmlMinifier from 'vite-plugin-html-minifier';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: 'index.html',
    },

    plugins: [
        react(),
        VitePluginBrowserSync({
            bs: {
                ui: {
                    port: 8080,
                },
                notify: true,
            },
        }),
        ViteImageOptimizer({}),
        htmlMinifier({
            minify: true,
        }),
    ],

    build: {
        outDir: 'public', // Изменено на 'public' для сохранения билда в эту папку
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name].js',
                entryFileNames: 'assets/js/[name].js',
                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
                        return 'assets/img/[name][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name][extname]';
                    }

                    if (/\.(woff(2)?|ttf|eot|svg)$/.test(name ?? '')) {
                        return 'assets/fonts/[name][extname]';
                    }

                    return 'assets/[name][extname]';
                },
            },
        },
    },
});
