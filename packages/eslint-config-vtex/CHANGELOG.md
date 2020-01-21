# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [11.2.1] - 2019-12-11
### Changed

- Keep local imports together with no newline between them.
- Add `_+` as an ignore pattern for `no-unused-vars`.

## [11.2.0] - 2019-10-31

### Added

- Add `eslint-plugin-import` to standardize import/export styles.

## [11.1.0] - 2019-09-16
### Changed
- Bump `typescript-eslint` to `v2.3.0`.
- Bump `eslint-plugin-lodash` to `v6.0.0`.
- Bump `eslint-config-prettier` to `v6.2.0`.

## [11.0.0] - 2019-07-15
### Changed
- Upgrade `typescript-eslint` dependencies to support latest TypeScript version.

## [10.1.0] - 2019-03-20
### Removed
- Remove `eslint-plugin-import`.

## [10.0.1] - 2019-03-15
### Changed
- Disabled rule `@typescript-eslint/explicit-function-return-type`.
  - The current version of the parser doesn't have support for type analysis, so this rule will
  complain for all functions, and not only the ones that doesn't have a type signature or aren't
  inferable.
- Added typescript extensions for import plugin.

## [10.0.0] - 2019-03-15
### Changed
- Add support for typescript using the `@typescript-eslint` project packages.

## [9.2.0] - 2019-02-18
### Changed
- Disable `no-console` rule for warnings and errors.

## [9.1.0] - 2019-02-06
### Added
- Eslint recommended rules.

## [9.0.0] - 2019-01-28
### Changed
- Lodash rules and prettier configs.
