module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react', 'react-hooks'],
  parserOptions: {
    escmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    // 0 means off
    // 1 means warnings but not required
    // 2 means required
    'arrow-body-style': 0,
    'no-unused-vars': 2,
    'prettier/prettier': [
      2,
      {
        arrowParens: 'avoid',
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
}
