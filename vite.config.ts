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
    coverage: {
        enabled: true,
        provider: 'v8',
        reporter: ['text', 'html', 'json'],
        include: ['src/**/*.{js,ts,vue}'],
        exclude: [
            'src/main.ts',
            'src/router/**',
            'src/**/*.d.ts',
            'tests/**',
            'e2e/**',
        ],
    },
    reporters: ['default', 'junit', 'json'],
    outputFile: {
        junit: './coverage/junit.xml',
        json: './coverage/report.json',
    },
    environment: 'jsdom',
    globals: true,
    exclude: [
      'node_modules/**',
      'dist/**',
      'e2e/**'
    ],

  }
})
