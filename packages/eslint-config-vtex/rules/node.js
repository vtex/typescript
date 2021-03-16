module.exports = {
  plugins: ['node'],
  env: {
    node: true,
  },
  rules: {
    // Disallow use of process.env
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
    'node/no-process-env': 'off',

    // Enforce a callback to return
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/callback-return.md
    //! too annoying
    'node/callback-return': 'off',

    // Require all requires be top-level
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
    'node/global-require': 'error',

    // Disallow use of new operator with the require function
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
    'node/no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
    'node/no-path-concat': 'error',

    // Make process.exit() expressions the same code path as throw
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
    'node/process-exit-as-throw': 'error',

    // Disallow deprecated APIs
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 'error',

    // Encourages use of promise APIs instead o callback APIs
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
    'node/prefer-promises/fs': 'warn',
    'node/prefer-promises/dns': 'warn',
  },
}
