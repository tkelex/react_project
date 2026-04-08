import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-scenario-b',
    rollupOptions: {
      input: 'scenario-b.html',
      output: {
        entryFileNames: 'assets/scenario-b-[hash].js',
      },
    },
  },
})
