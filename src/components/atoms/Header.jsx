import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  font-size: ${props => props.theme.sizes.body};
`;

const Header = ({ children, ...props }) =>
  (
    <StyledHeader {...props}>
      {children}
    </StyledHeader>
  );

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
