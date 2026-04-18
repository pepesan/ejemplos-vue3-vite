/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next/resolvers'

// https://vite.dev/config/

export default defineConfig({
  plugins: [
      vue(),
      Components({
        resolvers: [BootstrapVueNextResolver()],
      }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [
      'node_modules/**',
      'dist/**',
      'e2e/**'
    ]
  }
})
