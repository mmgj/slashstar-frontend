import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  font-size: ${props => props.theme.sizes.body};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
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
