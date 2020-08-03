/* eslint-disable global-require */
module.exports = {
  configs: {
    recommended: require('./lib/configs/recommended.js'),
  },
  rules: {
    'prefer-early-return': require('./lib/rules/prefer-early-return'),
  },
}
