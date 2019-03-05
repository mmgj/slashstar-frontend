import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1.5em;
  margin: 0 auto;
  display: flex;

  @media ${props => props.theme.media.minSmall} {
    padding: 2em;
  }
  .footer-siteinfo {
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
    line-height: .9rem;
    & a {
      color: inherit;
    }
  }
`;

const Footer = () => { // eslint-disable-line
  return (
    <StyledFooter>
      <div className="footer-siteinfo">
        © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
        {' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </StyledFooter>
  );
};

Footer.propTypes = {
};

export default Footer;
