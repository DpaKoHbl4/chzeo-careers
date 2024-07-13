import { resolve } from 'path'
import { defineConfig } from 'vite'

const input = {
    main: resolve(__dirname, './resources/js/app.js'),
    css: resolve(__dirname, './resources/scss/app.scss'),
}

export default defineConfig({
    // base: `/resources`,
    build: {
        rollupOptions: { input },
        manifest: true,
        emptyOutDir: true,
        outDir: resolve(__dirname, 'assets/build'),
    },
    server: {
        hmr: {
            protocol: 'ws',
        },
    }
})