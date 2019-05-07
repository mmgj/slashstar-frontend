import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import styled from '@emotion/styled';

const StyledThingie = styled.div`
  border-radius: 0.8rem 0.8rem 0 0;
  overflow: hidden;
  cursor: pointer;
  :focus,
  :hover {
    div {
      transform: scale(1.2);
    }
  }
`;


const CardImage = ({ image, height }) => (
  <StyledThingie>
    {image === null ? (
      <div
        style={{
          transition: 'all 0.5s',
          borderRadius: '.8rem .8rem 0 0',
          width: '100%',
          margin: 0,
          height,
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    ) : (
      <BackgroundImage
        style={{
          transition: 'all 0.5s',
          borderRadius: '.8rem .8rem 0 0',
          width: '100%',
          margin: 0,
          height,
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        fluid={image.asset.fluid}
        Tag="div"
      />
    )}
  </StyledThingie>
);

CardImage.defaultProps = {
  height: 250,
};

CardImage.propTypes = {
  height: PropTypes.number,
  image: PropTypes.object.isRequired,
};

export default CardImage;
