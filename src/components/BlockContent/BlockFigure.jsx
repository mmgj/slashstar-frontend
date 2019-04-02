import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

/* TODO: Inline this */
import { imageUrlFor, buildImageObj } from '../../lib/helpers/sanity-helpers';

const StyledFigure = styled.figure`
  max-width: 70%;
  ${(props) => {
    switch (props.align) {
      case 'left':
        return 'max-width: 50%; float: left;';

      case 'right':
        return 'max-width: 40%; float: right;';

      case 'center':
      default:
        return 'margin: 0 auto;';
    }
  }}
  img {
    margin: 2rem 0;
    border: 1em solid #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    max-width: 100%;
  }
  .block-inline-figure-caption {
    font-style: italic;
    color: darkgray;
  }
`;

const BlockFigure = ({ node }) => {
  const { asset, alt, caption, aligned } = node;
  return (
    <StyledFigure align={aligned}>
      {asset && <img alt={alt} src={imageUrlFor(buildImageObj(node)).fit('max')} />}
      {caption && <figcaption className="block-inline-figure-caption">{caption}</figcaption>}
    </StyledFigure>
  );
};

BlockFigure.propTypes = {
  node: PropTypes.object.isRequired,
};

export default BlockFigure;
