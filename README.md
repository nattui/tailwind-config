# Tailwind theme config

Opinionated Tailwind theme configuration

## Getting started

```bash
npm install @nattui/tailwind-theme-config
```

## Usage

```typescript
import {
  colors,
  fontSize10 as fontSize,
  spacing10 as spacing,
} from "@nattui/tailwind-theme-config"
import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    colors,
    fontSize,
    spacing,
  },
}

export default config
```
