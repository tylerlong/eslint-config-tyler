# eslint-config-tyler

Tyler's ESLint (& Prettier) configuration.

It's opinionated. It works out of the box.

It supports both Node.js projects and React frontend projects.
It will detect existance of `react` to enable React & frontend rules.

## Installation

```bash
yarn install eslint-config-tyler
```

## Usage

Create `eslint.config.mjs`:

```js
export { default } from 'eslint-config-tyler/eslint.config.mjs';
```

Create `prettier.config.mjs`:

```js
export { default } from 'eslint-config-tyler/prettier.config.mjs';
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
