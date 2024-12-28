import type { UserConfig } from 'vite';
import { resolve } from 'path';

export default {
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
} satisfies UserConfig;
