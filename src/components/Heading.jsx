import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/** REVIEW: This is either genius or retarded. Need to sleep on it. */

const StyledHeading = styled.span`
    font-family: ${props => props.theme.fonts.headings};
    font-weight: ${props => props.theme.weights[`h${props.h}`]};
    font-size: ${props => props.theme.sizes[`h${props.h}`]};

    ${props => Object.keys(props.theme.media).map(key =>
    (`@media(max-width: ${props.theme.media[key]}px) {
        font-size: ${props.theme.fontSizes[props.theme.media[key]][`h${props.h}`]
      };
    }`)).join('\n')}

    ${(props) => {
    if (props.h >= 5) {
      return `font-family:${props.theme.fonts.body};`;
    }
    return '';
  }
}
`;

const Heading = ({ h, children, ...props }) => <StyledHeading h={h} as={`h${h}`} {...props}>{children}</StyledHeading>;

Heading.defaultProps = {
  h: 1,
};

Heading.propTypes = {
  h: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Heading;
