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
  xlarge: 1920,
  large: 1440,
  medium: 1024,
  small: 640,
  xsmall: 400,
};

export const fontSizes = {
  [media.xlarge]: { h1: '6.8rem', h2: '4.4rem' },
  [media.large]: { h1: '6.8rem', h2: '4.4rem' },
  [media.medium]: { h1: '6.0rem', h2: '4.0rem' },
  [media.small]: { h1: '4.4rem', h2: '3.0rem' },
  [media.xsmall]: { h1: '3.8rem', h2: '2.4rem' },
};
