# Design System

This design system consists of three main packages: **tokens**, **components**, and **example**. Each package serves a specific purpose in creating a cohesive design language for applications.

## Packages

### 1. Tokens
The **tokens** package defines design tokens that can be used throughout the design system. These tokens include colors, typography, spacing, borders, elevation, and breakpoints. The tokens are generated from JSON files using Style Dictionary and can be published as an npm package.

- **Location**: `packages/tokens`
- **Key Files**:
  - `src/tokens/color.json`: Defines color tokens.
  - `src/tokens/typography.json`: Defines typography tokens.
  - `src/tokens/spacing.json`: Defines spacing tokens.
  - `src/tokens/border.json`: Defines border tokens.
  - `src/tokens/elevation.json`: Defines elevation tokens.
  - `src/tokens/breakpoint.json`: Defines breakpoint tokens.
  - `src/config.js`: Configures Style Dictionary for token generation.
  - `package.json`: Configuration for the tokens package.

### 2. Components
The **components** package imports the tokens and integrates them with Material Design principles to create styled components. This package includes reusable UI components such as buttons, inputs, and cards, which can be used in various applications.

- **Location**: `packages/components`
- **Key Files**:
  - `src/lib/button`: Contains the button component files.
  - `src/lib/input`: Contains the input component files.
  - `src/lib/card`: Contains the card component files.
  - `src/lib/components.module.ts`: Angular module that declares and exports all components.
  - `src/styles/_theme.scss`: Global theme styles using design tokens.
  - `src/styles/_material-overrides.scss`: Overrides for Material Design styles.
  - `package.json`: Configuration for the components package.

### 3. Example
The **example** package is a simple Angular application that demonstrates how to use the components from the components package. It serves as a practical reference for developers looking to implement the design system in their applications.

- **Location**: `packages/example`
- **Key Files**:
  - `src/app/pages/home`: Contains the home component files.
  - `src/app/pages/demo`: Contains the demo component files.
  - `src/app/app.component.ts`: Root component of the example application.
  - `src/styles.scss`: Global styles for the example application.
  - `package.json`: Configuration for the example application.

## Getting Started

To get started with the design system, clone the repository and install the necessary dependencies for each package. You can then build and publish the tokens and components packages as needed.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the design system.