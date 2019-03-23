import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Heading from './Heading';

const StyledBrand = styled(Heading)`
    display: inline-block;
    padding-right: 3rem;
    :hover, :focus {
        transition: all .1s ease-in;
        transform: scale(1.05);
      }
    a, a:visited {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
      border-bottom: 0;
      .brandbit {
        &.one {
          color: ${props => props.theme.colors.black};
        }
        &.two {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
`;

const splitChildren = (children) => {
  const split = children.split(' ');
  if (split.length !== 2) return children;
  const colored = (
    <>
      <span className="brandbit one">{split[0]}</span>
      <span className="brandbit two">{split[1]}</span>
    </>
  );
  return colored;
};

const Brand = ({ colored, h, children }) =>
  (
    <StyledBrand h={h}>
      <Link to="/">
        {colored ? splitChildren(children) : children}
      </Link>
    </StyledBrand>
  );

Brand.defaultProps = {
  h: 1,
  colored: false,
};

Brand.propTypes = {
  h: PropTypes.number,
  colored: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Brand;
