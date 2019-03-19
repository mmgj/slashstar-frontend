import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FrontPageGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: 100px 10vh auto 5vh 90px;
  header, footer {
    grid-column: 1 / 17;
    padding: 1rem;
  }
  header {
    grid-row: 1;
    min-height: 100px;
    border-bottom: 0px;
  }
  footer {
    height: 90px;
    grid-row: 5;
  }
`;

const IndexGrid = ({ children }) =>
  (
    <FrontPageGrid>
      {children}
    </FrontPageGrid>
  );

IndexGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexGrid;
