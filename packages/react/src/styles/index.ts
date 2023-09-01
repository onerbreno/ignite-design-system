import { colors, fontSizes, fontWeights, lineHeights, radii, space } from '@ignite-ui/tokens';
import { fonts } from './../../../tokens/src/fonts';
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} = createStitches({
  themeMap:  {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  }
})