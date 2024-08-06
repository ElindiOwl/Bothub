import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    // base: 'https://elindiowl.github.io/Yandex-Plus-Copy',
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: 'widgets',
                replacement: path.resolve(__dirname, 'src/widgets'),
            },
            {
                find: 'features',
                replacement: path.resolve(__dirname, 'src/features'),
            },
            {
                find: 'shared',
                replacement: path.resolve(__dirname, 'src/shared'),
            },
            { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
            {
                find: 'entities',
                replacement: path.resolve(__dirname, 'src/entities'),
            },
            {
                find: 'pages',
                replacement: path.resolve(__dirname, 'src/pages'),
            },
        ],
    },
});
