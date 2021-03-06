import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  position: relative;
  height: 50vw;
  width: 100%;
  margin: 0;
  border: 1px solid ${props => props.theme.colors.black};
  border-width: 1px 0 1px 0;
  overflow: hidden;
  .effects {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0%;
    top: 0;
    ${props => (props.shadow ? 'box-shadow: inset 0px 0px 200px 0px rgba(0,0,0,0.75);' : '')}
    z-index: 1;
  }
  .gatsby-image-wrapper {
    ${props => (props.centered ? 'top: 50%; transform: translateY(-50%);' : '')}
  }
`;

const BigImage = ({ img, shadow }) => {
  const { asset } = img;
  return (
    <Figure
      centered={img.centered}
      shadow={shadow}
      className="big-image"
    >
      {shadow && <div className="effects" />}
      <Img
        fluid={asset.fluid}
        style={{ }}
        imgStyle={{ }}
      />
    </Figure>
  );
};

BigImage.defaultProps = {
  shadow: false,
};

BigImage.propTypes = {
  img: PropTypes.object.isRequired,
  shadow: PropTypes.bool,
};

export default BigImage;
