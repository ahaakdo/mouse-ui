import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({ insertTypesEntry: true, copyDtsFiles: false })
  ]
})
