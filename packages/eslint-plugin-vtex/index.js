/* eslint-disable node/global-require */

module.exports = {
  configs: {
    recommended: require('./lib/configs/recommended.js'),
  },
  rules: {
    'prefer-early-return': require('./lib/rules/prefer-early-return'),
    'prefer-use-effect-named-callback': require('./lib/rules/prefer-use-effect-named-callback'),
  },
}
