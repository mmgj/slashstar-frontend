import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaMinSmall } from '../styles/media';

import '../styles/main.scss';


const Content = styled.div`
  min-height: calc(100% - 73px - 152px);

  @media ${mediaMinSmall} {
    min-height: calc(100% - 90px - 169px);
  }
`;

const Footer = styled.footer`
  box-sizing: border-box;
  max-width: 960px;
  padding: 1.5em;
  margin: 0 auto;

  @media ${mediaMinSmall} {
    padding: 2em;
  }
  .footer-siteinfo {
    text-align: center;
      font-size: .8rem;
      line-height: .9rem;
    & a {
      color: inherit;
    }
  }
`;

const Layout = ({ children, siteTitle }) =>
  (
    <>
      <h1>{siteTitle}</h1>
      <Content className="main-content-container">
        {children}
      </Content>
      <div className="main-content-footer-wrapper">
        <Footer>
          <div className="footer-siteinfo">
            © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
            {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </Footer>
      </div>
    </>
  );

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default Layout;
