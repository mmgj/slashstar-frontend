/*
  This file does the job of the traditional "layout-component" in Gatsby,
  which is to wrap pages with some commonly included stuff. Renamed for
  the sake of 1. Clarity, 2. Iconoclasticism and 3, The hell of it.
*/

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
// ⬇⬇ It seems this is necessary for putting styles on the root <html> element.
import '../styles/main.css';
import theme from '../themes/default-theme';


const setupQuery = graphql`
  query MetaQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      author
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    body {
      font-family: ${theme.fonts.body};
      font-size: ${theme.sizes.body};
      color: ${theme.colors.fg};
      margin: 0;
      h1, h2, h3 {
        font-family: ${theme.fonts.headings};
      }
    }
  }
`;

const PageWrapper = ({ children }) => (
  // Add react-helmet here
  <StaticQuery
    query={setupQuery}
    render={({ site }) => {
      return (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            {children}
          </>
        </ThemeProvider>
      );
    }}
  />
);

PageWrapper.defaultProps = {};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
