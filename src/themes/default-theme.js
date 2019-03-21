import { sizes, colors, weights, media, fontSizes } from './base';

const primaryFont = '"Montserrat Alternates", sans-serif';
const secondaryFont = primaryFont;
const tertiaryFont = '"Source Sans Pro", "Arial", sans-serif';

const setup = `
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,400i,900|Roboto:400,400i,700,700i');
`;

export default {
  name: 'Duck & Dog',
  setup,
  fonts: {
    body: primaryFont,
    headings: secondaryFont,
    ui: tertiaryFont,
  },
  weights: {
    ...weights,
    h1: 900,
    h2: 900,
  },
  fontSizes,
  sizes,
  media,
  colors: {
    ...colors,
    primary: '#F03F35',
    secondary: '#B6E3E4',
    tertiary: '#EFE8D8',
  },
};
