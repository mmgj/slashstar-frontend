import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
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
    ${'' /* font-size: ${theme.sizes.base}; */}
    font-size: 10px;
    box-sizing: border-box;
  }
  body {
    font-family: ${theme.fonts.body};
    font-size: ${theme.sizes.body};
    color: ${theme.colors.fg};
    margin: 0;
    h1, h2, h3 {
      font-family: ${theme.fonts.headings};
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
