module.exports = {
  extends: ['./index.js'],
  overrides: [
    // gatsby config files
    {
      files: ['gatsby-{ssr,browser,node,config}.{js,jsx,ts,tsx}'],
      rules: {
        'global-require': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    // allowed to use node libs
    {
      files: ['gatsby-{node,config,ssr}.{js,jsx,ts,tsx}'],
      rules: {
        'import/no-nodejs-modules': 'off',
      },
    },
    // needs to be .js/.js
    {
      files: ['gatsby-browser.{js,ts}'],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
}
