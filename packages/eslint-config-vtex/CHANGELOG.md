# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [15.0.0] - 2022-03-15
### Changed
- **BREAKING CHANGE** Upgrades `@typescript-eslint` dependencies to major 5.
- **BREAKING CHANGE** Upgrades `eslint-plugin-prettier` to major 4, and bumps
  `prettier` peer dependency to only target major 2.
- **BREAKING CHANGE** Updates peer dependency on `eslint` to only target major 8.

## [14.1.1] - 2021-08-17
### Changed
- Upgrades @typescript-eslint/\* deps to 4.29.2

## [14.1.0] - 2021-06-24
### Fixed
- Fix OOM on monorepos by optmizing parsing of typescript files

## [14.0.0] - 2021-03-25
### Changed
- `eslint-config-prettier` updated 6.15.0 to 8.1.0
- Requires at least ESLint 7.0.0 now, because `eslint-config-prettier` drops support for ESLint 6, [see here](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-700-2020-12-05)

## [13.0.0] - 2021-03-16
### Changed
- Use `eslint-plugin-node` instead of deprecated native node rules.

### Added
- Encourage usage of Promise API for `fs` and `dns` node modules.

## [12.9.5] - 2021-03-15
### Fixed
- `padding-line-between-statements` doesn't forces lines between cjs-import, import/order already handle them

## [12.9.4] - 2021-01-29
### Changed
- Update typescript-eslint dependencies

## 12.9.3 - 2020-12-16
### Fixed
- Change `projectFolderIgnoreList` parameter to regexps.

## 12.9.2 - 2020-12-11
### Added
- `consistency` parameter to `curly` rule.

## 12.9.0 - 2020-12-09
### Added
- Add convention for multi-line statements after ifs, whiles, fors, etc.

## 12.8.14 - 2020-12-04
### Changed
- Allow to use `import()` for type annotations.

## 12.8.12 - 2020-12-03
### Added
- `@typescript-eslint/no-unnecessary-type-constraint` rule.
- `@typescript-eslint/consistent-type-imports` rule.

### Fixed
- `no-shadow` rule for TypeScript.

## 12.8.11 - 2020-11-23
### Fixed
- Explicitly set a `jest` version for rule `jest/no-deprecated-functions` to work.
- Fix `tsconfig` resolution.

## 12.8.9 - 2020-11-18
### Changed
- Update typescript related tools.

## 12.8.8 - 2020-10-22
### Changed
- Allow `// @ts-expect-error` comments if it has a description.

## 12.8.7 - 2020-10-21
### Changed
- Repo url in package.json

## 12.8.6 - 2020-08-25
### Fixed
- [`naming-convention`] Strange issue regarding multiple selectors.

## 12.8.5 - 2020-08-21
### Changed
- Update eslint dependencies

## 12.8.4 - 2020-08-20
### Fixed
- Missing lib directory.

## 12.8.3 - 2020-08-20
### Added
- Check if typescript is available before including its plugin.

## 12.8.2 - 2020-08-05
### Fixed
- [`naming-convention`] Disable casing convention for any `memberLike` name.

## 12.8.1 - 2020-08-03
### Fixed
- [`naming-convention`] Add missing casing cases.

## 12.8.0 - 2020-08-03
### Added
- [`no-fallthrough`] Add comments in the format of `break .* omitted` or `fallsthrough` to allow falling through a switch case.
- [`naming-convention`] Use the new `naming-convention` rule to enforce a consistent symbol naming experience.

### Changed
- Update `@typescript-eslint` packages to latest major.

### Removed
- Deprecated `camelcase` rule.

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

[Unreleased]: https://github.com/vtex/typescript/compare/v15.0.0...HEAD
[15.0.0]: https://github.com/vtex/typescript/compare/v14.1.1...v15.0.0
[14.1.1]: https://github.com/vtex/typescript/compare/v14.1.0...v14.1.1
[14.1.0]: https://github.com/vtex/typescript/compare/v14.0.0...v14.1.0
[14.0.0]: https://github.com/vtex/typescript/compare/v13.0.0...v14.0.0
[13.0.0]: https://github.com/vtex/typescript/compare/v12.9.5...v13.0.0
[12.9.5]: https://github.com/vtex/typescript/compare/v12.9.4...v12.9.5
[12.9.4]: https://github.com/vtex/typescript/compare/v12.9.3...v12.9.4
[12.3.2]: https://github.com/vtex/typescript/compare/v12.3.1...v12.3.2
[12.2.1]: https://github.com/vtex/javascript/compare/v12.2.0...v12.2.1
[12.2.0]: https://github.com/vtex/javascript/compare/v12.1.0...v12.2.0
[12.1.0]: https://github.com/vtex/javascript/compare/v12.0.5...v12.1.0
[12.0.5]: https://github.com/vtex/javascript/compare/v12.0.4...v12.0.5
[12.0.4]: https://github.com/vtex/js-standards/compare/v12.0.3...v12.0.4
[12.0.3]: https://github.com/vtex/js-standards/compare/v12.0.2...v12.0.3
[12.0.2]: https://github.com/vtex/js-standards/compare/v12.0.1...v12.0.2
[12.0.1]: https://github.com/vtex/js-standards/compare/v12.0.0...v12.0.1
