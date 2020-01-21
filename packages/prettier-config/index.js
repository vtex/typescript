// Reference: https://prettier.io/docs/en/options.html
module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',

  // Specify the line length that the printer will wrap on.
  // TODO https://github.com/vtex/web-coding-standards/issues/1
  printWidth: 80,

  // Specify the number of spaces per indentation-level.
  tabWidth: 2,

  // Indent lines with tabs instead of spaces.
  useTabs: false,

  // Print semicolons at the ends of statements.
  semi: false,

  // Use single quotes instead of double quotes.
  singleQuote: true,

  // Use single quotes instead of double quotes in JSX.
  jsxSingleQuote: false,

  // Change when properties in objects are quoted.
  // TODO https://github.com/vtex/web-coding-standards/issues/2
  quoteProps: 'as-needed',

  // Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
  // TODO https://github.com/vtex/web-coding-standards/issues/5
  trailingComma: 'es5',

  //Print spaces between brackets in object literals.
  bracketSpacing: true,

  // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
  // TODO https://github.com/vtex/web-coding-standards/issues/3
  jsxBracketSameLine: false,

  // Include parentheses around a sole arrow function parameter.
  // TODO https://github.com/vtex/web-coding-standards/issues/4
  arrowParens: 'avoid',
}
