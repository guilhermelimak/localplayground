module.exports = {
  extends: ['standard', 'plugin:jest/recommended'],
  env: { 'jest/globals': true },
  plugins: ['jest'],
  rules: {
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-expect-assertions': 'error',
    'jest/valid-expect-in-promise': 'error'
  }
}
