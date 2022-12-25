/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['custom'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
