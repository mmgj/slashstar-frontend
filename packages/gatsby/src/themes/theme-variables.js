const baseSize = '62.5%';
const black = '#2B2929';
const white = '#ffffff';
const primary = '#F03F35';
const secondary = '#B6E3E4';
const tertiary = '#EFE8D8';
const success = '#44A45F';
const warn = '#FCEB3B';
const error = '#E6173E';
const grey = '#8D8D8F';
const darkgrey = '#333333';
const lightgrey = '#DADADA';

export const sizes = {
  base: baseSize,
  body: '1.8rem',
  h1: '6.8rem',
  h2: '4.4rem',
  h3: '3rem',
  h4: '2rem',
};

export const weights = {
  base: 300,
  body: 300,
  h1: 800,
  h2: 800,
  h3: 500,
  h4: 500,
};

export const colors = {
  white,
  black,
  primary,
  secondary,
  tertiary,
  success,
  warn,
  error,
  grey,
  darkgrey,
  lightgrey,
  bg: white,
  fg: black,
  gray: grey,
  darkgray: darkgrey,
  lightgray: lightgrey,
};

export const media = {
  minSmall: 'min-width: 450px',
  maxSmall: 'max-width: 449px',
  minMed: 'min-width: 675px',
  maxMed: 'max-width: 674px',
  minLarge: 'min-width: 900px',
};

export const reset = `
  /* Font reset: 1rem = 10px */
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  * { box-sizing: border-box; }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
      display: block;
  }
`;
