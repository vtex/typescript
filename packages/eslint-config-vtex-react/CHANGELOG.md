# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [9.0.0] - 2022-03-15
### Changed
- Include `eslint` major 8 in peer dependencies range.

## [8.0.0] - 2021-03-25
### Changed
- `eslint-config-prettier` updated 6.15.0 to 8.1.0
- Requires at least ESLint 7.0.0 now, because `eslint-config-prettier` drops support for ESLint 6, [see here](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-700-2020-12-05)

## [6.9.4] - 2021-01-29
### Changed
- Update typescript-eslint dependencies

## 6.9.1 - 2020-12-09
### Fixed
- Wrong preset extension.

## 6.9.0 - 2020-12-09
### Changed
- Move hooks config to `react-hooks` file.

## 6.8.6 - 2020-12-03
### Fixed
- Add `env.browser: true` to react preset.

## 6.8.4 - 2020-11-25
### Added
- `useCustomClasses` hook to `react-hooks/exhaustive-deps` rule to io.

## 6.8.2 - 2020-11-19
### Added
- Ignore jsx-filename rule for `gatsby-browser.js`.

## 6.8.1 - 2020-11-19
### Fixed
- Missing entrypoing for gatsby preset.

## 6.8.0 - 2020-11-19
### Added
- `vtex-react/gatsby` preset.

## 6.7.12 - 2020-11-18
### Changed
- Allow components to have all capitalized names.

## 6.7.9 - 2020-10-21
### Changed
- Repo url in package.json

## 6.7.7 - 2020-08-21
### Changed
- Update hooks preset to v4

## 6.7.1 - 2020-07-20
### Changed
- Message from imports of `ramda` and `lodash`.

## 6.5.0 - 2020-06-01
### Added
- `prettier` `v2.0` as acceptable dependency.

## 6.3.1 - 2020-03-30
### Fixed
- Release cycle.

## 6.2.2 - 2020-03-30
### Fixed
- Allow to use ramda/lodash and node libraries in a testing context.

## [6.2.1] - 2020-02-28
### Fixed
- Add sub presets to package bundle

## [6.2.0] - 2020-02-28
### Added
- Add IO and Native presets

## [6.1.1] - 2020-02-14
### Fixed
- Use explicitly latest react version

## [6.0.3] - 2020-01-24
### Fixed
- Changelog on deploy workflow again.

## [6.0.2] - 2020-01-24
### Fixed
- Changelog on deploy workflow.

## [6.0.1] - 2020-01-24
### Fixed
- Missing files in packages.

## 6.0.0 - 2020-01-24
### Changed
- Whole project structure.

### Added
- New rules to ensure best practices.
- New rules to enforce a default coding style.

## 5.1.0 - 2019-10-31
### Added
- Rule to warn when a native node package is imported.

## 5.0.1 - 2019-07-25
### Changed
- Updated `eslint-plugin-react` version.a

## 5.0.0 - 2019-07-15
### Changed
- Updated `eslint-config-vtex` dependency version.

## 4.1.0 - 2019-04-29
### Fixed
- Disabled all rules conflicting with `eslint-config-prettier/react`.

## 4.0.0 - 2019-03-15
### Changed
- Add support for typescript by extending `eslint-config-vtex` v10.
- Add more rules for a11y in components.

[Unreleased]: https://github.com/vtex/typescript/compare/v9.0.0...HEAD
[9.0.0]: https://github.com/vtex/typescript/compare/v8.0.0...v9.0.0
[8.0.0]: https://github.com/vtex/typescript/compare/v6.9.4...v8.0.0
[6.9.4]: https://github.com/vtex/typescript/compare/v6.9.1...v6.9.4
[6.2.1]: https://github.com/vtex/javascript/compare/v6.2.0...v6.2.1
[6.2.0]: https://github.com/vtex/javascript/compare/v6.1.1...v6.2.0
[6.1.1]: https://github.com/vtex/javascript/compare/v6.0.3...v6.1.1
[6.0.3]: https://github.com/vtex/js-standards/compare/v6.0.2...v6.0.3
[6.0.2]: https://github.com/vtex/js-standards/compare/v6.0.1...v6.0.2
[6.0.1]: https://github.com/vtex/js-standards/compare/v6.0.0...v6.0.1
