// Validation of package correctly installed
try {
  require('typescript');
  require('@typescript-eslint/eslint-plugin');
  require('@typescript-eslint/parser');
} catch {
  throw new Error(
    'Please add typescript, @typescript-eslint/eslint-plugin and @typescript-eslint/parser packages',
  );
}

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      extends: ['./javascript'],
      files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
