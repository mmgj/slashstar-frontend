import { sizes, colors, weights, media } from './base';

const setup = `
  @import url('https://fonts.googleapis.com/css?family=Chewy|Luckiest+Guy');
`;

const primaryFont = '"Chewy", cursive';
const secondaryFont = '"Luckiest Guy", cursive';
const tertiaryFont = '"Source Sans Pro", "Arial", sans-serif';

export default {
  name: 'Yikes!',
  setup,
  fonts: {
    body: primaryFont,
    headings: secondaryFont,
    ui: tertiaryFont,
  },
  sizes: {
    ...sizes,
    base: '62,5%',
    body: '1.6rem',
  },
  weights: {
    ...weights,
    body: 'regular',
    h1: 'bold',
  },
  media,
  colors: {
    ...colors,
    primary: 'hotpink',
    secondary: 'turquoise',
    h1: colors.primary,
    h2: colors.secondary,
    h3: colors.tertiary,
  },
};
