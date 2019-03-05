import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Brand from './Brand';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  padding: 0 2rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (${props => props.theme.media.maxMed}) {
      display: flex;
      flex-direction: column-reverse;
    }
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
    }
  `);

  return (
    <StyledHeader>
      <NavBar />
      <Brand h={2} colored>
        {data.site.title}
      </Brand>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
