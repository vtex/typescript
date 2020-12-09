/* eslint-disable node/global-require */

exports.hasPackage = (pkg) => {
  try {
    require(pkg)

    return true
  } catch (e) {
    return false
  }
}
