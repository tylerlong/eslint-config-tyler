import globals from 'globals';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierEslint from 'eslint-plugin-prettier/recommended';
import { Linter } from 'eslint';

const config: Linter.Config[] = [
  {
    // must be the only key here, ref: https://eslint.org/docs/latest/use/configure/ignore
    ignores: [],
  },
  {
    languageOptions: { globals: globals.node },
    rules: { eqeqeq: ['error', 'always'] },
  },
  jsEslint.configs.recommended,
  ...(tsEslint.configs.recommended as Linter.Config[]),
];

// only if react is installed
try {
  await import('react');
  const reactEslint = await import('eslint-plugin-react');
  config.push(reactEslint.default.configs.flat.recommended as Linter.Config);
  config[1].languageOptions!.globals = globals.browser;
  config[1].settings = { react: { version: 'detect' } };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e) {
  // ignore
}

config.push(prettierEslint);

export default config;
