import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledArticle = styled.article`
  font-size: ${props => props.theme.sizes.body};
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
