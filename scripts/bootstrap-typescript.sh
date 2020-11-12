yarn add -D eslint prettier eslint-config-vtex eslint-plugin-vtex @vtex/prettier-config typescript @vtex/tsconfig
echo '{ "extends": "vtex", "plugins": ["vtex"] }' >> .eslintrc
echo '"@vtex/prettier-config"' >> .prettierrc
echo '{ "extends": "@vtex/tsconfig" }' >> tsconfig.json