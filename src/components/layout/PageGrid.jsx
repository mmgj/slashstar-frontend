import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  z-index: 10;
  header, footer {
    grid-column: 1 / -1;
    min-height: 100px;
  }
  footer {
    grid-row: auto;
  }
  header {
    grid-row: 1;
  }
  figure.big-image {
    grid-column: 1 / -1;
  }
  article {
    grid-column: 3 / 15;
  }
  aside {
    grid-column: 13 / 16;
  }
  @media (max-width: 1024px) {
    article {
      grid-column: 3 / 15;
    }
    aside {
      grid-column: 13 / 17;
      grid-row: 3;
    }
  }
  @media (max-width: 799px) {
    article {
      grid-column: 2 / 16;
    }
    aside {
      min-height: 100px;
      grid-column: 1 / 17;
      grid-row: auto;
    }
  }
  @media (max-width: 540px) {
    article {
      padding: 0 1.8rem;
      grid-column: 2 / 16;
    }
  }
`;

const PageGrid = ({ children }) =>
  (
    <StyledContainer>
      {children}
    </StyledContainer>
  );

PageGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageGrid;
