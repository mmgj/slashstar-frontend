import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { imageUrlFor, buildImageObj } from '../../lib/helpers/sanity-helpers';

const StyledFigure = styled.figure`
  margin: 2rem 0;
  padding: 0;

  &.img {
    width: 100%;
    height: auto;
  }
`;

function Figure(props) {
  const { asset, alt, caption } = props;
  return (
    <StyledFigure className="block-inline-figure">
      {asset && (
        <img
          src={imageUrlFor(buildImageObj(props))
            .width(1200)
            .url()}
          alt={alt}
        />
      )}
      {caption && <figcaption className="block-inline-figure__caption">{caption}</figcaption>}
    </StyledFigure>
  );
}

Figure.defaultProps = {
  alt: 'inline-image',
  caption: undefined,
};

Figure.propTypes = {
  asset: PropTypes.object.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.string,
};

export default Figure;
