module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      'files': ['*.test.js'],
      'rules': {'no-console': 'off'}
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'arrow-body-style': ['error', 'as-needed'],
    'camelcase': [ 'error', { 'properties': 'always' } ],
    'complexity': ['warn', { 'max': 20 }],
    'consistent-this': 1,
    'for-direction': 1,
    'func-style': ['error', 'expression'],
    'indent': [ 'error', 2],
    //"linebreak-style": ["error", "windows" ],
    'max-lines': ['warn', {'max': 500, 'skipBlankLines': true, 'skipComments': true}],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-compare-neg-zero': 1,
    'no-dupe-keys': 1,
    'no-throw-literal': 'error',
    'no-unneeded-ternary': 'warn',
    'no-unused-vars': 1,
    'no-inner-declarations': 1,
    'no-magic-numbers': ['warn', { 'ignore': [-1, 0, 0.5, 1, 2, 3, 25, 50, 75, 100, 180, 360, 1000], 'ignoreArrayIndexes': true }],
    'object-curly-newline': ['error', { 'multiline': true }],
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'prefer-promise-reject-errors': 'error',
    'quotes': ['warn', 'single'],
    'semi': [ 'error', 'always' ],
    'sort-imports': ['warn', { 'allowSeparatedGroups': true }],
    'sort-vars': 'warn',
  }
};
