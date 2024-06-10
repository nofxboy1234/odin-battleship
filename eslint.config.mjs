import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    ignores: ['**/node_modules/', '**/dist/', 'package-lock.json'],
  },
  {
    files: ['tests/**/*'],
    env: {
      jest: true,
    },
  },
];
