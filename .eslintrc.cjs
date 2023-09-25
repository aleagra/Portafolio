export default {
	env: { browser: true, es2021: true, node: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		requireConfigFile: false,
	},
	settings: { react: { version: '18.2' } },
  parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['warn', 'single'],
		semi: ['warn', 'never'],
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react-hooks/rules-of-hooks': 'error',
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			rules: {
				'@typescript-eslint/indent': ['error', 'tab'],
				'@typescript-eslint/quotes': ['error', 'single'],
				'@typescript-eslint/no-unused-vars': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
			},
		},
		{
			files: ['src/', 'src/index.*'],
			rules: {
				'@typescript-eslint/no-restricted-imports': 'off',
				'react-hooks/exhaustive-deps': 'error',
			},
		},
	],
}
