import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: { project: ['tsconfig.json'] },
    },
  },
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: eslintPluginPrettier,
    },
  },
  {
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
    },
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'eslint.config.js',
      'postcss.config.cjs',
      'vite.config.ts',
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
