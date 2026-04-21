import {defineConfig, mergeConfig} from 'vitest/config'
import viteConfig from './vite.config'
import path from 'path'

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            include: ['tests/vitest/**/*.test.ts'],
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
                'e2e/**',
            ],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }),
)

