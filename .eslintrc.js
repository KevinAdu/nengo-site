module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
};
