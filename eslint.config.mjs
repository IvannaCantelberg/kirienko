// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from '@typescript-eslint/eslint-plugin';

export default withNuxt(
  // Your custom configs here
  eslintConfigPrettier
);
