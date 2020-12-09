const REPO_URL = 'https://github.com/vtex/javascript'

function getDocUrl(ruleName) {
  return `${REPO_URL}/blob/main/packages/eslint-plugin-vtex/docs/rules/${ruleName}.md`
}

module.exports = {
  getDocUrl,
}
