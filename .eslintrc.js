module.exports = {
  env: {
      browser: true,
      es2021: true,
      jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 13,
      sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'arrow-body-style': 'off',
      'react/jsx-fragments': ['error', 'element'],
      'import/no-extraneous-dependencies': 'off',
      'react/function-component-definition': [
          'error',
          {
              namedComponents: 'arrow-function',
          },
      ],
  },
  overrides: [
      {
          files: ['./src/components/**/index.js'],
          rules: {
              'no-restricted-exports': 'off',
          },
      },
  ],
};