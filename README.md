# Tailwind theme config

Opinionated Tailwind theme configuration.

## Getting started

### Installation

```bash
npm install --save-dev @nattui/tailwind-theme-config
```

### Usage

```typescript
// tailwind.config.ts

// Root font size 16px (default)
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  screens,
  spacing,
} from "@nattui/tailwind-theme-config"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    borderRadius,
    colors,
    fontFamily,
    fontSize,
    screens,
    spacing,
  },
}

export default config
```

```typescript
// tailwind.config.ts

// Root font size 10px
import {
  borderRadius10 as borderRadius,
  colors,
  fontFamily,
  fontSize10 as fontSize,
  screens,
  spacing10 as spacing,
} from "@nattui/tailwind-theme-config"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    borderRadius,
    colors,
    fontFamily,
    fontSize,
    screens,
    spacing,
  },
}

export default config
```

### Root font size 10px

```css
/* apps/styles/global.css */

html {
  font-size: 10px;
}
```

```json
// .vscode/settings.json

{
  "tailwindCSS.rootFontSize": 10
}
```
