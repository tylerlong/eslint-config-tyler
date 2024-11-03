import jsEslint from '@eslint/js';
import { Linter } from 'eslint';
import prettierEslint from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

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
  config.push(reactEslint.default.configs.flat?.recommended as Linter.Config);

  // todo: in the future, eslint-plugin-react-hooks may support flat config
  const reactHooksEslint = await import('eslint-plugin-react-hooks');
  config.push({
    plugins: {
      'react-hooks': reactHooksEslint,
    },
    rules: {
      ...reactHooksEslint.configs.recommended.rules,
    },
  });

  config[1].languageOptions!.globals = globals.browser;
  config[1].settings = { react: { version: 'detect' } };
} catch {
  // ignore
}

config.push(prettierEslint);

export default config;
