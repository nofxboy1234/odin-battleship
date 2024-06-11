import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  {
    ignores: ['**/node_modules/', '**/dist/', 'package-lock.json'],
  },
];
