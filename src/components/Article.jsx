import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/*TODO: Rewrite this to contain the .shadow-boxer element */
const StyledArticle = styled.article`
  margin-top: -15vw;
  z-index: 1;
  .shadow-boxer {
    background: white;
    display: block;
    position: relative;
    min-height: 500px;
    padding: .1px 5rem 10vh 5rem;
    @media(max-width: ${props => props.theme.media.xsmall}px) {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
  }
  .shadow-boxer::after {
      border-radius: 0 0 70% 70%;
      box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.25);
      content: '';
      display: block;
      height: 550px;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }
  pre {
    margin: 5rem 0;
    font-size: 1.6rem;
  }
`;

const Article = ({ children }) =>
  (
    <StyledArticle>
      {children}
    </StyledArticle>
  );

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
