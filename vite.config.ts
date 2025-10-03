import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {
  //   extensions: ['.js', '.ts', '.jsx', '.tsx'],
  //   alias: {
  //     '@': '/src',
  //     '@/app': '/src/app',
  //     '@/pages': '/src/pages',
  //     '@/features': '/src/features',
  //     '@/entities': '/src/entities',
  //     '@/shared': '/src/shared',
  //     '@/store': '/src/store',
  //   },
  // },
});
