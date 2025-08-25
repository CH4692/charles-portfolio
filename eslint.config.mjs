// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-config-prettier';

export default [
  // Ignorieren (wichtig: auch die eigenen Configs)
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '.turbo/**',
      'dist/**',
      'out/**',
      '.vercel/**',
      '**/*.d.ts',
      'eslint.config.mjs',
      'postcss.config.mjs',
    ],
  },

  // JS/JSX (kein TS-Parser hier!)
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // TypeScript: Basis (nicht type-aware)
  ...tseslint.configs.recommended,

  // TypeScript: type-aware nur für TS/TSX
  ...tseslint.config(...tseslint.configs.recommendedTypeChecked, {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // Next Core Web Vitals
      ...nextPlugin.configs['core-web-vitals'].rules,

      // Import-Ordnung
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TS: praxisfreundlich
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/unbound-method': 'off', // optional: sonst oft noisy in FKs
    },
  }),

  // Prettier-Kompat
  prettier,
];
