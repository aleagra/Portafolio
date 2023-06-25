export default {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
};