import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Heading';

const StyledTitle = styled(Heading)`
  display: inline-block;
  margin: 5rem 0 2rem 5rem;
  color: ${props => props.theme.colors.darkgrey};
`;

const PageTitle = ({ children }) => <StyledTitle h={1}>{children}</StyledTitle>;


PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
