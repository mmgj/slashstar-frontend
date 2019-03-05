import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledArticle = styled.article`
  padding: 0 5rem;
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
