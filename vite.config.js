import { defineConfig } from 'vite';

export default defineConfig({
  base: '/starflight2/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
    chunkSizeWarningLimit: 1600,
  },
});