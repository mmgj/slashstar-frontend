import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h1`
  font-weight: ${props => props.theme.weights[`h${props.h}`]};
  font-size: ${props => props.theme.sizes[`h${props.h}`]};
`;

const Heading = ({ h, children, ...props }) => {
  return <StyledHeading h={h} {...props}>{children}</StyledHeading>;
};

Heading.defaultProps = {
  h: 1,
};

Heading.propTypes = {
  h: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Heading;
