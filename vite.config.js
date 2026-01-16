import { defineConfig } from 'vite'

export default defineConfig({
    // Base path for GitHub Pages (usually the repo name, but user can adjust)
    // For now we assume root or let the user configure it if they deploy to a subpath.
    base: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
})
