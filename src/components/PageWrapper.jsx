/*
  This file does the job of the traditional "layout-component" in Gatsby,
  which is to wrap pages with some commonly included stuff. Renamed for
  the sake of 1. Clarity, 2. Iconoclasticism and 3, The hell of it.
*/

import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
// ⬇⬇ It seems including an actual css file is necessary for putting styles on the root <html> element.
import '../styles/main.css';
import theme from '../themes/default-theme';
import SEO from './SEO';

const globalStyle = css`
  html {
    body {
      ${theme.setup}
      font-family: ${theme.fonts.body};
      font-size: ${theme.sizes.body};
      color: ${theme.colors.fg};
      margin: 0;
    }
  }
`;

const PageWrapper = ({ children, pageTitle, pageImage, pageExcerpt, pageLocation }) =>
  (
    <ThemeProvider theme={theme}>
      <>
        <SEO
          pageTitle={pageTitle}
          pageImage={pageImage}
          pageExcerpt={pageExcerpt}
          location={pageLocation}
        />
        <Global styles={globalStyle} />
        {children}
      </>
    </ThemeProvider>
  );

PageWrapper.defaultProps = {
  pageTitle: 'slashstar.dev',
  pageImage: 'https://picsum.photos/1200/630/?random',
  pageExcerpt: undefined,
  pageLocation: {
    host: 'slashstar.dev',
    href: 'https://slashstar.dev',
  },
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  pageImage: PropTypes.string,
  pageExcerpt: PropTypes.string,
  pageLocation: PropTypes.object,

};

export default PageWrapper;
