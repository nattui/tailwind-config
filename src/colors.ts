// ========================================================================== /
// Natt Nguyen's Tailwind Radix Colors v2
// Last updated: 2024.09.01
// ========================================================================== /

const radixColorNames = [
  "amber",
  "black",
  "blue",
  "bronze",
  "brown",
  "crimson",
  "cyan",
  "gold",
  "grass",
  "gray",
  "green",
  "indigo",
  "iris",
  "jade",
  "lime",
  "mauve",
  "mint",
  "olive",
  "orange",
  "pink",
  "plum",
  "purple",
  "red",
  "ruby",
  "sage",
  "sand",
  "sky",
  "slate",
  "teal",
  "tomato",
  "violet",
  "white",
  "yellow",
] as const

type Color = (typeof radixColorNames)[number]
type ColorTuple = [string, string]

export function generateRadixColorScale(
  color: Color | string,
  isAlpha = false,
) {
  const colors: ColorTuple[] = []
  const prefix = isAlpha ? "a" : ""
  for (let index = 1; index <= 12; index++) {
    const key = `${prefix}${index}`
    const value = `var(--${color}-${key})`
    colors.push([key, value])
  }
  return Object.fromEntries(colors)
}

export const colors = Object.fromEntries(
  radixColorNames.map((color) => {
    return color === "black" || color === "white"
      ? [
          color,
          {
            ...generateRadixColorScale(color, true),
            DEFAULT: color,
          },
        ]
      : [
          color,
          {
            ...generateRadixColorScale(color),
            ...generateRadixColorScale(color, true),
            DEFAULT: `var(--${color}-9)`,
          },
        ]
  }),
)

colors["current"] = { DEFAULT: "current" }
colors["transparent"] = { DEFAULT: "transparent" }
