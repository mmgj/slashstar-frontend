/*
  This file does the job of the traditional "layout-component" in Gatsby,
  which is to wrap pages with some commonly included stuff. Renamed for
  the sake of 1. Clarity, 2. Iconoclasticism and 3, The hell of it.
*/

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
// ⬇⬇ It seems including an actual css file is necessary for putting styles on the root <html> element.
import '../styles/main.css';
import theme from '../themes/default-theme';

const setupQuery = graphql`
  query MetaQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

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

const PageWrapper = ({ children }) => (
  <StaticQuery
    query={setupQuery}
    render={() =>
      (
        <ThemeProvider theme={theme}>
          <>
            <Helmet
              title="Slash Star Dot Dev"
              meta={[
                { name: 'description', content: 'Rubber Duck Debugging Manifest' },
                { name: 'keywords', content: 'gatsby, sanity, react, javascript, jamstack, web dev, yolo' },
              ]}
              htmlAttributes={{ lang: 'en' }}
            />
            <Global styles={globalStyle} />
            {children}
          </>
        </ThemeProvider>
      )
    }
  />
);

PageWrapper.defaultProps = {};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
