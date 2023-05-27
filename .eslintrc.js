module.exports = {
  extends: [
    'eslint-config-ali/typescript/vue',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
