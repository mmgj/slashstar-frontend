import { sizes, colors, weights, media, fontSizes } from './base-theme';

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
  fontSizes,
  sizes,
  weights,
  media,
  colors: {
    ...colors,
  },
};
