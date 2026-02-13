import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';
export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		plugins: {
			js,
			'@stylistic': stylistic,
		},
		extends: ["js/recommended"],
		rules: {
			"indent": ["error", "tab"],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/semi-spacing': 'error',
			'@stylistic/keyword-spacing': ['error', { before: true, after: true }],
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
			'@stylistic/padded-blocks': ['error', { blocks: 'never' }],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/lines-between-class-members': 'error',
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: '*',
					next: '*',
				},
				{
					blankLine: 'never',
					prev: 'import',
					next: 'import',
				},
				{
					blankLine: 'never',
					prev: ['case', 'default'],
					next: '*',
				},
			],
		},
		languageOptions: {
			globals: globals.browser
		}
	},
	{
		files: ["**/*.js"],
		languageOptions: {
			sourceType: "commonjs"
		}
	},
	tseslint.configs.recommended,
]);
