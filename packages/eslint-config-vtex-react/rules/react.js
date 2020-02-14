module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'latest',
    },
    linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
  },
  rules: {
    // Disallow target="_blank" on links
    // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['error', { skipUndeclared: true }],

    // Require ES6 class declarations over React.createClass
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'error',

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'warn',

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': 'error',

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    // Prevent usage of .bind() in JSX props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
      },
    ],

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': ['error'],

    // Remove unneeded fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    // TODO waiting for https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356
    'react/jsx-no-useless-fragment': 'off',

    // Enforce a standard way of defining function components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    // TODO enable?
    'react/function-component-definition': 'off',

    // Enforce jsx/tsx file extension
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],

    // Remove unnecessary braces in attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'ignore' },
    ],

    // Enforce a consistent way of using JSX Fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react/jsx-fragments.md
    // TODO https://github.com/vtex/javascript/issues/36
    // See if there's a way to import the Fragment instead of using React.Fragment
    'react/jsx-fragments': ['off', 'element'],

    // Prevent usage of this.state inside setState calls
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // Enforce each file to have no more than one component
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    // TODO discuss
    'react/no-multi-comp': 'off',

    // Warns if using shouldComponentUpdate in a PureComponent extended component
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    // Prevent from trying to read props via this.state on stateless components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Enforce the style attribute to be an object
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    // TODO maybe enable? it's annoying for the style prop of react-intl components
    'react/style-prop-object': 'off',

    // Prevent void DOM elements from receiving children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',
  },
}
