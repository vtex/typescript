const { hasPackage } = require('../lib/utils')

const hasTypescript = hasPackage('typescript')

module.exports = !hasTypescript
  ? {}
  : {
      overrides: [
        {
          files: ['*.ts', '*.tsx'],
          extends: [
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
          ],
          plugins: ['@typescript-eslint'],
          parser: '@typescript-eslint/parser',
          parserOptions: {
            ecmaVersion: 2019,
            sourceType: 'module',
            project: [
              // look in the root
              'tsconfig{.eslint.json,.json}',
              // look in dirs like node/react
              '*/tsconfig{.eslint.json,.json}',
              // look in dirs like packages/package/*
              '*/*/tsconfig{.eslint.json,.json}',
            ],
            projectFolderIgnoreList: [/node_modules/i],
            // We need this configuration to avoid performance issues in monorepos
            // https://github.com/typescript-eslint/typescript-eslint/issues/1192#issuecomment-862414778
            allowAutomaticSingleRunInference: true,
          },
          rules: {
            //! extensions of native eslint rules
            //! when modifying a rule here, make sure to modify the native one and vice-versa

            // Disallow declaration of variables already declared in the outer scope
            // https://eslint.org/docs/rules/no-shadow
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': [
              'error',
              {
                allow: ['done', 'next', 'resolve', 'reject', 'cb'],
              },
            ],

            // Prevent unused declared variables
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
              'warn',
              {
                ignoreRestSiblings: true,
                argsIgnorePattern: '_+',
              },
            ],

            // Disallows the use of eval()-like methods
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
            // TODO enable? maybe too much
            'no-magic-numbers': 'off',
            '@typescript-eslint/no-magic-numbers': [
              'off',
              {
                ignore: [0, 1, 2, 3],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: false,
                ignoreNumericLiteralTypes: true,
                ignoreEnums: true,
              },
            ],

            // Enforce parameters with default values to be last
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': 'error',

            // Disallow useless constructors
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'error',

            // Disallow empty functions, except for standalone funcs/arrows
            // https://eslint.org/docs/rules/no-empty-function
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': [
              'error',
              {
                allow: ['arrowFunctions', 'functions', 'methods'],
              },
            ],

            // Require a consistent naming convention
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
            camelcase: 'off',
            '@typescript-eslint/naming-convention': [
              'error',
              {
                selector: 'default',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
              },
              {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
              },
              {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
              },
              {
                selector: 'typeLike',
                format: ['PascalCase'],
              },
              {
                selector: 'memberLike',
                format: null,
              },
              {
                // have to leave this for now as this rule
                // doesn't separate regular parameters from
                // destructured parameters
                selector: 'parameter',
                format: null,
              },
            ],

            // Disallow use of variables before they are defined
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': [
              'error',
              {
                functions: false,
                classes: false,
                variables: true,
                enums: false,
                typedefs: false,
              },
            ],
            // ! ts only rules
            // Enforce explicit accessibility modifiers on class properties and methods
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
            '@typescript-eslint/explicit-member-accessibility': [
              'error',
              {
                accessibility: 'explicit',
                overrides: {
                  accessors: 'explicit',
                  constructors: 'no-public',
                  methods: 'explicit',
                  parameterProperties: 'explicit',
                },
              },
            ],

            // Enforce explicit function return type
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
            '@typescript-eslint/explicit-function-return-type': 'off',

            // Enforce a consistent way of typing arrays
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.mdv
            '@typescript-eslint/array-type': [
              'warn',
              {
                default: 'array-simple',
                readonly: 'array-simple',
              },
            ],

            // Enforce a consitent way to type objects
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
            '@typescript-eslint/consistent-type-definitions': 'off',

            // Disallow non null assertions (!), comes from the recommended config
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // Enforce that when adding two variables, operands must both be of type number or of type string
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
            '@typescript-eslint/restrict-plus-operands': [
              'error',
              {
                checkCompoundAssignments: true,
              },
            ],

            // Enforce optional chaining over chaining AND (&&) operators
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
            '@typescript-eslint/prefer-optional-chain': 'warn',

            // Enforce optional chaining over chaining AND (&&) operators
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

            // Enforce nullish coalescing over short-circuiting
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
            '@typescript-eslint/prefer-nullish-coalescing': [
              'warn',
              {
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: true,
              },
            ],

            // Prefer usage of as const over literal type
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
            // TODO: turn it on when 2.18.x is out
            // '@typescript-eslint/prefer-as-const': 'error',

            // Prevent unnecessary type arguments
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
            '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

            // Warns when a namespace qualifier is unnecessary
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
            '@typescript-eslint/no-unnecessary-qualifier': 'warn',

            // Disallow throwing literals as exceptions
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
            '@typescript-eslint/no-throw-literal': 'warn',

            // Disallows invocation of require() in favor of import statements
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
            '@typescript-eslint/no-require-imports': 'warn',

            // Disallows the use of eval()-like methods
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
            '@typescript-eslint/no-implied-eval': 'error',

            // Requires Array#sort calls to always provide a compareFunction
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
            '@typescript-eslint/require-array-sort-compare': 'error',

            // Enforce explicit enum item values
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
            '@typescript-eslint/prefer-enum-initializers': 'warn',

            // Explicitly defines what a module scoped method returns
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
            '@typescript-eslint/explicit-module-boundary-types': 'off',

            // Disallow harmful bultin types
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
            //! Commented because we use the recommended version of this rule
            // '@typescript-eslint/ban-types': 'off',

            // Disallow // @ts comments
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
            '@typescript-eslint/ban-ts-comment': [
              'error',
              {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': true,
                'ts-nocheck': true,
                'ts-check': false,
                minimumDescriptionLength: 3,
              },
            ],

            // Disallows unnecessary constraints on generic types
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
            '@typescript-eslint/no-unnecessary-type-constraint': 'warn',

            // Enforces consistent usage of type imports
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
            '@typescript-eslint/consistent-type-imports': [
              'warn',
              {
                prefer: 'type-imports',
                disallowTypeAnnotations: false,
              },
            ],
          },
        },
        {
          files: ['*.d.ts'],
          rules: {
            'import/order': 'off',
            'import/no-duplicates': 'off',
            'import/export': 'off',
          },
        },
      ],
    }
