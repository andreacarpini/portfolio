
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Using './' allows the app to be deployed to any subpath (like your repo name) 
  // without needing to hardcode the repository name here.
  base: '/portfolio/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
