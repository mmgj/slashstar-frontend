import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


import Brand from './Brand';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  width: calc(100% - 3.12rem);
  padding: 0 2.6rem 1.6rem 1.6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const headerQuery = graphql`
  query HeaderQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Header = () => (
  <StaticQuery
    query={headerQuery}
    render={({ site }) => (
      <StyledHeader>
        <NavBar />
        <Brand h={2} colored>
          {site.title}
        </Brand>
      </StyledHeader>
    )}
  />
);

Header.propTypes = {};

export default Header;
