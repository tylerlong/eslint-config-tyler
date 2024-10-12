import { Config } from 'prettier';

const config: Config = {
  singleQuote: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
