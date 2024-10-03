import globals from 'globals';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import reactEslint from 'eslint-plugin-react';
import prettierEslint from 'eslint-plugin-prettier/recommended';

const config = [
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: { globals: globals.browser },
  },
  jsEslint.configs.recommended,
  ...tsEslint.configs.recommended,
  reactEslint.configs.flat.recommended,
  prettierEslint,
];

export default config;
