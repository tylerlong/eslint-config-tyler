import globals from 'globals';
import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierEslint from 'eslint-plugin-prettier/recommended';
import { Linter } from 'eslint';

const config: Linter.Config[] = [
  {
    languageOptions: { globals: globals.node },
  },
  jsEslint.configs.recommended,
  ...(tsEslint.configs.recommended as Linter.Config[]),
];

// only if react is installed
try {
  await import('react');
  const reactEslint = await import('eslint-plugin-react');
  config.push(reactEslint.default.configs.flat.recommended as Linter.Config);
  config[0].languageOptions!.globals = globals.browser;
  config[0].settings = { react: { version: 'detect' } };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e) {
  // ignore
}

config.push(prettierEslint);

export default config;
