# @jablonowski/components

Angular component library built on top of **Angular Material**, themed with **@jablonowski/tokens**.

## Installation

```bash
npm install @jablonowski/components @angular/material @angular/cdk
```

> `@jablonowski/tokens` is included as a transitive dependency.

## Setup

### 1. Import the theme in your global `styles.scss`

```scss
@use '@jablonowski/components/styles/theme' as ds-theme;
```

### 2. Import components in your Angular modules or standalone components

```typescript
import { DsButtonComponent, DsCardComponent, DsInputComponent } from '@jablonowski/components';

@Component({
  standalone: true,
  imports: [DsButtonComponent, DsCardComponent, DsInputComponent],
  // ...
})
export class MyComponent {}
```

## Available Components

| Component       | Selector       | Description                      |
| --------------- | -------------- | -------------------------------- |
| **DsButton**    | `ds-button`    | Themed button wrapping MatButton |
| **DsInput**     | `ds-input`     | Themed input wrapping MatInput   |
| **DsCard**      | `ds-card`      | Themed card wrapping MatCard     |

## Usage Examples

```html
<!-- Button -->
<ds-button variant="primary">Click me</ds-button>
<ds-button variant="secondary" [disabled]="true">Disabled</ds-button>

<!-- Input -->
<ds-input label="Email" placeholder="Enter your email" [(value)]="email"></ds-input>

<!-- Card -->
<ds-card title="Welcome">
  <p>Card content goes here.</p>
</ds-card>
```

## Development

```bash
# Build the library
npm run build

# Publish patch version
npm run release

# Publish minor version
npm run release:minor

# Publish major version
npm run release:major
```

## Theming

The library uses Angular Material's theming system with design tokens injected as CSS custom properties. All token values come from `@jablonowski/tokens` so any update to the tokens package automatically propagates when rebuilt.

Override any token by redefining the CSS custom property:

```css
:root {
  --color-primary-500: #your-custom-color;
}
```
