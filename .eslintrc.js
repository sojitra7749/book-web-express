module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
