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
  @media (max-width: ${props => props.theme.media.medium}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const PageHeader = () => {
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

PageHeader.propTypes = {};

export default PageHeader;
