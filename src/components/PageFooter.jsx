import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const StyledFooter = styled.footer`
  display: flex;
  width: auto;
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin: 0;
  left: 0;
`;

const PageFooter = ({ children }) =>
  (
    <StyledFooter>
      {children}
    </StyledFooter>
  );

PageFooter.defaultProps = {
  children: <span>Made with Love & Code</span>,
};

PageFooter.propTypes = {
  children: PropTypes.node,
};

export default PageFooter;
