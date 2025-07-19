// eslint.config.mjs

import eslintPlugin from '@eslint/js';
import nextEslintPlugin from 'next';

export default [
  eslintPlugin.configs.recommended,
  nextEslintPlugin(),
];
