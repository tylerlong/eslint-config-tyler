import { Config } from 'prettier';

const config: Config = {
  singleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['<BUILTIN_MODULES>', '', '<THIRD_PARTY_MODULES>', '', '^[.]'],
};

export default config;
