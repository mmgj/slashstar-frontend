import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './atoms/Heading';

const StyledTitle = styled(Heading)`
  display: inline-block;
  margin: 2rem 0 2rem 2rem;
  color: ${props => props.theme.colors.darkgrey};
  @media(max-width: ${props => props.theme.media.medium}) {
    margin: 2rem 1rem 1rem 2rem;
  }
`;

const PageTitle = ({ children }) => <StyledTitle h={1}>{children}</StyledTitle>;


PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
