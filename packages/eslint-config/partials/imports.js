module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        /**
         * Allow import type separated of normal import
         * @example 'import type { ClassValue } from 'clsx'; and 'import clsx from 'clsx';'
         */
        'no-duplicate-imports': 'off',
      },
    },
  ],
  plugins: ['import', 'unused-imports'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': false }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'unused-imports/no-unused-imports': 'error',
  },
};
