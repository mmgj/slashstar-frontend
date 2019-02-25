import { sizes, colors, weights, media } from './theme-variables';

const primaryFont = 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
const secondaryFont = '"Montserrat Alternates", sans-serif';
const tertiaryFont = '"Source Sans Pro", "Arial", sans-serif';

export default {
  name: 'Duck & Dog',
  fonts: {
    body: primaryFont,
    headings: secondaryFont,
    ui: tertiaryFont,
  },
  sizes,
  weights,
  media,
  colors: {
    h1: colors.primary,
    h2: colors.secondary,
    h3: colors.tertiary,
    ...colors,
  },
};
