import { recommended } from './configs/recommended'
import { consistentPropsType } from './rules/consistent-props-type'
import { preferEarlyReturn } from './rules/prefer-early-return'
import { preferUseEffectNamedCallback } from './rules/prefer-use-effect-named-callback'

// tsdx doesn't support we configure our tsconfig.json
// to target module commonjs, so we need to manually
// use module.exports here
module.exports = {
  configs: {
    recommended,
  },

  // TODO: these rules could be auto-generated using fs+path,
  // but tsdx doesn't works well with dynamic imports,
  // so we need to change our build system first
  rules: {
    'consistent-props-type': consistentPropsType,
    'prefer-early-return': preferEarlyReturn,
    'prefer-use-effect-named-callback': preferUseEffectNamedCallback,
  },
}
