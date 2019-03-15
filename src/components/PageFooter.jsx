import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 5vw;
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  font-size: smaller;
`;

const PageFooter = ({ children }) => {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  );
};

PageFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageFooter;
