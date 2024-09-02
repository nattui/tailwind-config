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

import {
  colors,
  fontFamily,
  fontSize10 as fontSize,
  spacing10 as spacing,
} from "@nattui/tailwind-theme-config"
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  theme: {
    colors,
    fontFamily,
    fontSize,
    spacing,
  },
}

export default config
```

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
