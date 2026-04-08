# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Include Testing into a new project
```shell
npm install -D vitest @vue/test-utils jsdom
```
Modify `vite.config.ts` to include the following:
```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
``` 
Modify package.json to include the following:
```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run"
  }
}
```
Include your tests in the `tests/components` directory, for example `PrimerComponente.spec.ts`

## Run tests
```shell
npm run test
```
