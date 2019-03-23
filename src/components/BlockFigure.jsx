import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


import { imageUrlFor, buildImageObj } from '../lib/helpers/sanity-helpers';

const StyledFigure = styled.figure`
  margin: 2rem 0;
  padding: 0;
  img {
    ${(props) => {
    switch (props.align) {
      case 'left':
        return 'width: 50%; float: left; margin-right: 2.5rem;';
      case 'right':
        return 'width: 50%; float: right; margin-left: 2.5rem;';
      case 'center':
      default:
        return 'width: 100%;';
    }
  }}
  }
`;

const BlockFigure = (props) => {
  const { asset, alt, caption, aligned } = props;
  return (
    <StyledFigure align={aligned} {...props}>
      {asset && (
        <img
          src={imageUrlFor(buildImageObj(props)).fit('max')}
          alt={alt}
        />
      )}
      {caption && <figcaption className="block-inline-figure__caption">{caption}</figcaption>}
    </StyledFigure>
  );
};

BlockFigure.defaultProps = {
  alt: 'inline-image',
  caption: undefined,
  aligned: 'center',
};

BlockFigure.propTypes = {
  asset: PropTypes.object.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
  aligned: PropTypes.oneOf(['left', 'right', 'center']),
};

export default BlockFigure;
