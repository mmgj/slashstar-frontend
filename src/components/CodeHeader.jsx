import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BlockCode from './BlockContent/BlockCode';

const StyledThingie = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background: orange;
  border-radius: 0.8rem 0.8rem 0 0;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :focus,
  :hover {
    div {
      transform: scale(1.2);
    }
  }
`;

const CodeHeader = ({ code, height }) => {
  console.log('code: ', code);
  return (
    <StyledThingie height={height}>
      <BlockCode
        style={{
          marginLeft: -60,
          marginRight: -50,
          overflow: 'hidden',
          transform: 'rotate(-45deg)',
          fontSize: '2rem',
        }}
        language={code.language}
      >
        {code.code}
      </BlockCode>
    </StyledThingie>
  );
};

CodeHeader.defaultProps = {
  height: 250,
};

CodeHeader.propTypes = {
  code: PropTypes.object.isRequired,
  height: PropTypes.number,
};

export default CodeHeader;
