import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Brand from './Brand';
import NavBar from './NavBar';

const StyledHeader = styled.div`
  width: calc(100% - 3.12rem);
  padding: 0 2.6rem 1.6rem 1.6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ siteTitle }) =>
  (
    <StyledHeader>
      <NavBar />
      {siteTitle && <Brand h={2} colored>{siteTitle}</Brand>}
    </StyledHeader>
  );

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
