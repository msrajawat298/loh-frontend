module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'react/function-component-definition': [
    'error',
    {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function',
    },
  ],
  'jsx-a11y/anchor-is-valid': 'off',
  'react/button-has-type': 'off',
  'linebreak-style': 0,
  "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "required": {
          "some": ["nesting", "id"]
        }
      }
    ],
  },
}
