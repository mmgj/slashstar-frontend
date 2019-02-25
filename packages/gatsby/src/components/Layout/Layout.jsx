import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import theme from '../../themes/default-theme';
// import theme from '../../themes/terrible-theme';

import Header from './Header';
import BigImage from './BigImage';
import PageTitle from './PageTitle';
import Article from './Article';
import PageMeta from './PageMeta';
import Footer from './Footer';

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

const Content = styled.div`
  min-height: calc(100% - 73px - 152px);

  @media (${props => props.theme.media.minSmall}){
    min-height: calc(100% - 90px - 169px);
  }
`;

const PageSplit = styled.div`
  box-sizing: border-box;
  /* max-width: 960px; */
  padding: 1.5em;
  margin: 0 auto;

  @media (${props => props.theme.media.minSmall}) {
    padding: 2em;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 200px;
    grid-column-gap: 2em;

  @media (${props => props.theme.media.minMed}) {
    grid-template-columns: 75% 20%;
    grid-column-gap: 3%;
  }
  .main-content {
    a {
    color: ${props => darken(0.3, props.theme.colors.secondary)};

    @media (hover: hover) {
      &:hover {
        color: inherit;
        }
      }
    }
  }
}
`;

const Layout = ({ children, pageType, pageData }) =>
  (
    <ThemeProvider theme={theme}>
      <StaticQuery
        query={setupQuery}
        render={({ site }) => {
          const { title: siteTitle } = site;
          const pageNode = pageData[pageType];
          const { mainImage } = pageNode;
          console.log('mainImage: ', mainImage);

          const pageTitle = pageData[pageType].title;
          return (
            <Content>
              <GlobalStyles />
              <Header siteTitle={siteTitle || 'No Title Yo'} pageTitle={pageTitle || 'No Such Title'} />
              {mainImage && <BigImage asset={mainImage.asset} />}
              <PageSplit>
                <div className="grid">
                  <div className="main-content">
                    <PageTitle h={1}>{pageTitle}</PageTitle>
                    <Article>{children}</Article>
                  </div>
                  <PageMeta data={pageNode} />
                </div>
              </PageSplit>
              <Footer />
            </Content>
          );
        }}
      />
    </ThemeProvider>
  );

Layout.defaultProps = {
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.oneOf(['page', 'project', 'post']).isRequired,
  pageData: PropTypes.object.isRequired,
};

export default Layout;
