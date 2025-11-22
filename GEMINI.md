# Project: archimate-diagram-engine

## Project Overview

This project is a TypeScript library for rendering ArchiMate 3.x diagrams. It uses `jointjs` to create the diagrams and can be used in both client-side and server-side applications. The main entry point of the library is `src/index.ts`, which exports the `ViewRenderer` and `ViewSettings` classes. The core rendering logic is located in `src/lib/viewRenderer/ViewRenderer.ts`.

## Building and Running

### Build

To build the project, run the following command:

```bash
npm run build
```

This command compiles the TypeScript code into JavaScript, placing the output in the `dist` directory.

### Testing

To run the tests, use the following command:

```bash
npm test
```

To run a specific test, use the `test:unique` script with the `--grep` flag:

```bash
npm run test:unique -- --grep "ViewSettings"
```

To generate a test coverage report, run:

```bash
npm run test:cov
```

## Development Conventions

### Coding Style

The project uses `prettier` for code formatting. The configuration is in `.prettierrc.json`.

### Testing

The project uses `mocha` as the testing framework and `chai` for assertions. Tests are located in the `__tests__` directory and follow the naming convention `*.test.ts`.

### Code Quality

Code quality is enforced using `.codeclimate.yml` and `.deepsource.toml`. These configurations define various checks for code complexity, argument count, and other metrics.
