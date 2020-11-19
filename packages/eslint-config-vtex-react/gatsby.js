module.exports = {
  extends: ['./index.js'],
  overrides: [
    {
      files: ['gatsby-{ssr,browser,node,config}.{js,jsx,ts,tsx}'],
      rules: {
        'global-require': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['gatsby-{node,config,ssr}.{js,jsx,ts,tsx}'],
      rules: {
        'import/no-nodejs-modules': 'off',
      },
    },
  ],
}
