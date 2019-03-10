const baseSize = '10px';

const black = '#000000';
const white = '#ffffff';
const primary = 'hotpink';
const secondary = 'skyblue';
const tertiary = 'darkorange';
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
  base: 'normal',
  body: 'normal',
  strong: 'bold',
  em: 'normal',
  h1: 'bold',
  h2: 'bold',
  h3: 'normal',
  h4: 'normal',
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
  xlarge: 1400,
  large: 1200,
  medium: 1024,
  small: 600,
  xsmall: 400,
};

export const fontSizes = {
  [media.xlarge]:   { body: '1.6rem', h15: '7.4rem', h10: '6.8rem', h1: '6.2rem', h2: '3.6rem', h3: '1.75rem', h4: '1.125rem' },
  [media.large]:    { body: '1.6rem', h15: '6.6rem', h10: '6.0rem', h1: '5.2rem', h2: '3.6rem', h3: '1.75rem', h4: '1.125rem' },
  [media.medium]:   { body: '1.6rem', h15: '6.4rem', h10: '5.8rem', h1: '4.6rem', h2: '3.6rem', h3: '1.75rem', h4: '1.125rem' },
  [media.small]:    { body: '1.6rem', h15: '5.8rem', h10: '5.2rem', h1: '3.6rem', h2: '3.2rem', h3: '1.5rem', h4: '1.1rem' },
  [media.xsmall]:   { body: '1.6rem', h15: '5.0rem', h10: '4.6rem', h1: '2.8rem', h2: '3.0rem', h3: '1.5rem', h4: '1.1rem' },
};
