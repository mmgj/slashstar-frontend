import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  ul,
  ol {
    list-style-type: none;
  }
`;

const Nav = ({ children, ...props }) =>
  (
    <StyledNav {...props}>
      {children}
    </StyledNav>
  );

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
