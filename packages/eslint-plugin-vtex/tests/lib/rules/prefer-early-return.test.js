const { RuleTester } = require('eslint')

const rule = require('../../../lib/rules/prefer-early-return')

const ruleTester = new RuleTester()

const error = {
  message:
    'Prefer an early return to prevent nesting and improve code readability',
  type: 'IfStatement',
}

ruleTester.run('prefer-early-return', rule, {
  valid: [
    {
      code: `function foo() {
        if (!something) { return; }

        doSomething();
        doSomethingElse();
      }`,
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
        }
      }`,
    },
    {
      code: `function foo() {
        if (something)
          doSomething();
      }`,
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      options: [{ maxStatements: 2 }],
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        }

        someOtherThing();
      }`,
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        } else {
          doAnotherThing();
        }
      }`,
    },
    {
      code: `var foo = function() {
        if (something) {
          doSomething();
        }
      }`,
    },
    {
      code: `var foo = () => {
        if (something) {
          doSomething();
        }
      }`,
      parserOptions: { ecmaVersion: 6 },
    },
    {
      code: `var foo = function() {
        if (something) {
          doSomething();
        }
      }`,
    },
    {
      code: "var foo = () => 'bar'",
      parserOptions: { ecmaVersion: 6 },
    },
  ],

  invalid: [
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      errors: [error],
    },
    {
      code: `function foo() {
        if (something)
          doSomething();
      }`,
      options: [{ maxStatements: 0 }],
      errors: [error],
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
        }
      }`,
      options: [{ maxStatements: 0 }],
      errors: [error],
    },
    {
      code: `var foo = function() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      errors: [error],
    },
    {
      code: `var foo = () => {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      parserOptions: { ecmaVersion: 6 },
      errors: [error],
    },
    {
      code: `callback(function() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      })`,
      errors: [error],
    },
    {
      code: `function foo() {
        var bar = 'bar'
        if (something) {
          doSomething()
          doSomethingElse()
        }
      }`,
      errors: [error],
    },
  ],
})
