# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 12.7.0 - 2020-07-01
### Changed
- Block Typescript `enum`s.
- Allow `console.info`

## 12.6.0 - 2020-06-24
### Added
- Padding lines after multiline block-like statements such as `try-catch`, `if`, `while`, `for` etc.

### Changed
- `padding-line-between-statements` is now a warning instead of an error.

## 12.5.1 - 2020-06-19
### Added
- `env.es6: true` to base eslint config.

### Fixed
- Make `Cypress` global available in every file inside the `cypress` directory.

## 12.5.0 - 2020-06-01
### Added
- `prettier` `v2.0` as acceptable dependency.

## [12.3.2] - 2020-04-01
### Changed
- Disable some import rules inside TypeScript declaration files.

## 12.3.1 - 2020-03-30
### Fixed
- Release cycle.

## 12.2.2 - 2020-03-30
### Fixed
- Deactivate `consistent-type` typescript rule.

## [12.2.1] - 2020-02-28
### Fixed
- Add sub presets to package bundle

## [12.2.0] - 2020-02-28
### Removed
- Import block of `lodash` and `testing-library`

## [12.1.0] - 2020-02-12
### Added
- `eslint-plugin-jest` and `eslint-plugin-cypress`

## [12.0.5] - 2020-02-06
### Fixed
- Prevent eslint trying to load tsconfig from node_modules.

## [12.0.4] - 2020-02-03
### Added
- Add warning message for lodash and @testing-library imports.

## [12.0.3] - 2020-01-24
### Fixed
- Changelog on deploy workflow again.

## [12.0.2] - 2020-01-24
### Fixed
- Changelog on deploy workflow.

## [12.0.1] - 2020-01-24
### Fixed
- Missing files in packages.

## 12.0.0 - 2020-01-24
### Changed
- Whole project structure.

### Added
- New rules to ensure best practices.
- New rules to enforce a default coding style.

## 11.2.1 - 2019-12-11
### Changed
- Keep local imports together with no newline between them.
- Add `_+` as an ignore pattern for `no-unused-vars`.

## 11.2.0 - 2019-10-31
### Added
- Add `eslint-plugin-import` to standardize import/export styles.

## 11.1.0 - 2019-09-16
### Changed
- Bump `typescript-eslint` to `v2.3.0`.
- Bump `eslint-plugin-lodash` to `v6.0.0`.
- Bump `eslint-config-prettier` to `v6.2.0`.

## 11.0.0 - 2019-07-15
### Changed
- Upgrade `typescript-eslint` dependencies to support latest TypeScript version.

## 10.1.0 - 2019-03-20
### Removed
- Remove `eslint-plugin-import`.

## 10.0.1 - 2019-03-15
### Changed
- Disabled rule
  - The current version of the parser doesn't have support for type analysis, so this rule will
    complain for all functions, and not only the ones that doesn't have a type signature or aren't
    inferable.
- Added typescript extensions for import plugin.

## 10.0.0 - 2019-03-15
### Changed
- Add support for typescript using the `@typescript-eslint` project packages.

## 9.2.0 - 2019-02-18
### Changed
- Disable `no-console` rule for warnings and errors.

## 9.1.0 - 2019-02-06
### Added
- Eslint recommended rules.

## 9.0.0 - 2019-01-28
### Changed
- Lodash rules and prettier configs.

[Unreleased]: https://github.com/vtex/typescript/compare/v12.3.2...HEAD
[12.3.2]: https://github.com/vtex/typescript/compare/v12.3.1...v12.3.2
[12.2.1]: https://github.com/vtex/javascript/compare/v12.2.0...v12.2.1
[12.2.0]: https://github.com/vtex/javascript/compare/v12.1.0...v12.2.0
[12.1.0]: https://github.com/vtex/javascript/compare/v12.0.5...v12.1.0
[12.0.5]: https://github.com/vtex/javascript/compare/v12.0.4...v12.0.5
[12.0.4]: https://github.com/vtex/js-standards/compare/v12.0.3...v12.0.4
[12.0.3]: https://github.com/vtex/js-standards/compare/v12.0.2...v12.0.3
[12.0.2]: https://github.com/vtex/js-standards/compare/v12.0.1...v12.0.2
[12.0.1]: https://github.com/vtex/js-standards/compare/v12.0.0...v12.0.1
