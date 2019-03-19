import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const StyledContainer = styled.div`
  ${props => props.code}
`;

const StyleInjector = ({ code, children }) => {
  console.log('code: ', code);
  return (
    <StyledContainer code={code}>
      <div className="root">
        {children}
      </div>
    </StyledContainer>
  );
};

StyleInjector.propTypes = {
  code: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default StyleInjector;
