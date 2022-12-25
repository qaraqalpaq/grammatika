/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['turbo', 'prettier', 'plugin:@typescript-eslint/recommended'],
  // rules: {
  //   'import/no-extraneous-dependencies': [
  //     'error',
  //     {
  //       devDependencies: false,
  //       optionalDependencies: false,
  //       peerDependencies: false,
  //     },
  //   ],
  // },
};
