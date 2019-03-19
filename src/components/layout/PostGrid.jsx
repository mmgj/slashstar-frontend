import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
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
  figure {
    height: 0;
    padding-bottom: 50%;
    width: 100%;
    overflow: hidden;
    grid-column: 1 / -1;
    img {
      width: 100%;
      height: auto;
    }
  }
  article {
    z-index: 100;
    padding: 0 5rem 10vh 5rem;
    margin-top: -15vw;
    background: white;
    grid-column: 2 / 12;
  }
  aside {
    grid-column: 13 / 16;
  }
  @media (min-width: 1200px) {
    picture {
    padding-bottom: 30%;
      img {
        /* transform: translateY(-20%); */
      }
    }
  }
  @media (max-width: 1024px) {
    article {
      grid-column: 2 / 13;
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

const PostGrid = ({ children }) =>
  (
    <StyledContainer>
      {children}
    </StyledContainer>
  );

PostGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostGrid;
