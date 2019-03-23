import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const StyledContainer = styled.div`
  ${props => props.code}
`;

const StyleInjector = ({ code, children }) =>
  (
    <StyledContainer code={code}>
      <div className="root">
        {children}
      </div>
    </StyledContainer>
  );

StyleInjector.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default StyleInjector;
