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
import config from "eslint-config-tyler/prettier.config.mjs";

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
Ref: https://eslint.org/docs/latest/use/configure/ignore

### Prettier

You need to create a `.prettierignore` file.

It cannot be configured in `prettier.config.mjs` file, unfortunately.
