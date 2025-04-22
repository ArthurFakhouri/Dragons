import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, 'src/shared/theme'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@theme/colors.scss" as *;`,
      },
    },
  },
})
