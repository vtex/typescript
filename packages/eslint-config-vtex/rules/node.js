module.exports = {
  env: {
    node: true,
  },
  rules: {
    // Disallow use of process.env
    // https://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // Enforce a callback to return
    // https://eslint.org/docs/rules/callback-return
    //! maybe too annoying
    'callback-return': 'off',

    // Require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    // TODO https://github.com/vtex/front-end-coding-standard/issues/28
    'global-require': 'error',

    // Disallow use of new operator with the require function
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',
  },
}
