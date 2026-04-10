# @design-system/tokens

Design tokens for the design system — colors, typography, spacing, borders, elevation and breakpoints.

Built with [Style Dictionary](https://amzn.github.io/style-dictionary/).

## Installation

```bash
npm install @design-system/tokens
```

## Usage

### CSS Custom Properties

```css
@import '@design-system/tokens/dist/css/variables.css';

.my-element {
  background-color: var(--color-primary-500);
  font-family: var(--font-family-base);
  padding: var(--spacing-md);
}
```

### SCSS Variables

```scss
@import '@design-system/tokens/dist/scss/variables';

.my-element {
  background-color: $color-primary-500;
  font-family: $font-family-base;
  padding: $spacing-md;
}
```

### JavaScript / TypeScript

```ts
import { ColorPrimary500, SpacingMd } from '@design-system/tokens';
```

## Available Token Categories

| Category       | Description                                  |
| -------------- | -------------------------------------------- |
| **Color**      | Primary, secondary, neutral, semantic colors |
| **Typography** | Font families, sizes, weights, line heights  |
| **Spacing**    | Consistent spacing scale                     |
| **Border**     | Border widths, radii                         |
| **Elevation**  | Box shadow levels                            |
| **Breakpoint** | Responsive breakpoints                       |

## Development

```bash
# Build tokens
npm run build

# Publish patch version
npm run release

# Publish minor version
npm run release:minor

# Publish major version
npm run release:major
```
