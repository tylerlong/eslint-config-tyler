# eslint-config-tyler

Tyler's ESLint & Prettier configuration.

It's opinionated. It works out of the box.

It supports both Node.js projects and React frontend projects.
It will detect existence of `react` to enable React & frontend rules.

## Installation

```bash
yarn add --dev eslint-config-tyler
```

## Usage

Create `eslint.config.mjs`:

```js
import config from 'eslint-config-tyler/eslint.config.mjs';

export default config;
```

Create `prettier.config.mjs`:

```js
import config from 'eslint-config-tyler/prettier.config.mjs';

export default config;
```

Run:

```bash
yarn eslint . --fix
```

## Configuration

If you need to change some configuration:

```js
import config from 'eslint-config-tyler/prettier.config.mjs';

config.singleQuote = false;

export default config;
```

## Ignore

### ESLint

```js
import config from 'eslint-config-tyler/eslint.config.mjs';

config[0].ignores = ['lib/', 'demo/'];

export default config;
```

Please note that you should NOT add any other keys to `config[0]`, because according to ESLint's documentation:

> if an ignores key is used without any other keys in the configuration object, then the patterns act as global ignores.
> Ref: https://eslint.org/docs/latest/use/configure/ignore

### Prettier

You need to create a `.prettierignore` file.

It cannot be configured in `prettier.config.mjs` file, unfortunately.

## Config rules:

```js
config[1].rules[ruleName] = 'off' | 'warn' | 'error';
```

We should not change `config[0]` since it is for ignore only.

## Format on Save with VS Code

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": "explicit"
},
```

## Notes

To make `eslint-plugin-react-hooks` work, your react component shouldn't be wrapped.
For example: `const App = auto(() => '')` doesn't work because it is wrapped by `auto`.
related: https://github.com/jsx-eslint/eslint-plugin-react/issues/3848
It works if I write it like this: `const App = auto(function App() { return ''; })`.
