// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-config-prettier';

// Hilfsfunktion: macht die type-aware TS-Configs nur für TS/TSX gültig
const typeAwareForTsOnly = tseslint.configs.recommendedTypeChecked.map((cfg) => ({
  ...cfg,
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ...cfg.languageOptions,
    parserOptions: {
      ...(cfg.languageOptions?.parserOptions ?? {}),
      project: ['./tsconfig.eslint.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
}));

export default [
  // --- Ignorieren (auch commitlint!) ---
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
      'commitlint.config.cjs',
      '**/*.config.*',
      '**/*.cjs',
      'playwright-report/**',
      'test-results/**',
    ],
  },

  // --- JS/JSX Basis ---
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // --- TS (nicht type-aware) ---
  ...tseslint.configs.recommended,

  // --- TS (type-aware) NUR für TS/TSX + mit project ---
  ...typeAwareForTsOnly,

  // --- Next / Plugins / Regeln ---
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
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

      // TS Praxis
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/unbound-method': 'off',
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // --- Prettier am Ende ---
  prettier,
];
