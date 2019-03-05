import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import theme from '../themes/default-theme';
// import theme from '../../themes/terrible-theme';


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
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,400i,800,800i|Roboto:400,400i,700,700i');

    font-size: ${theme.sizes.base};
    box-sizing: border-box;
  }
  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.sizes.body};
    color: ${theme.colors.fg};
    h1, h2, h3 {
      font-family: ${theme.fonts.headings};
    }
  }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-rows: auto 1fr auto;
    grid-gap: 1em;
    header,
    footer,
    .main-image {
      grid-column: 1 / span 2;
    }
`;

const PageWrapper = ({ children }) => (
  <StaticQuery
    query={setupQuery}
    render={({ site }) => {
      return (
        <ThemeProvider theme={theme}>
          <Grid>
            <GlobalStyles />
            {children}
          </Grid>
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
