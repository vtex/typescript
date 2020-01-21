# Javascript Standards

Main repository for VTEX's javascript standards. Issues should be used to start discussions about standards and patterns. PRs are welcome after being rightfully discussed.

## Project Structure

```tree
docs/                         # standards documentation
packages/                     # standards related packages
├── eslint-config-vtex        # base eslint rule preset
├── eslint-config-vtex-react  # eslint rule preset for react projects
├── prettier-config           # prettier preset of all front-end projects
└── tsconfig                  # base tsconfig for all typescript projects
```

## Contributing

Nothing is written in stone, so if there's some kind of rule or pattern that you wish to discuss or implement, we encourage an open discussion via this [repository issues](/issues). The project use labels to keep everything organized and easy-to-find:

- `discussion` - discussion thread;
- `style` - related to code style, something that there's no wrong or right;
- `practices/patterns` - related to good coding practices that should be standardized and documented;
- `documentation` - a generic documentation issue;
- `todo` - common TODO item, with no explicit SLA.

Feel free to use more than one label in an issue, but try keeping them semantic to help developers.

### WIP
