import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Figure = styled.div`
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
    z-index: 1;
    ${props => props.shadow && (`
      box-shadow: inset 0px 0px 200px 0px rgba(0,0,0,0.75);
    `)}
  }
  .gatsby-image-wrapper {
    ${props => (props.centered ? 'top: 50%; transform: translateY(-50%);' : '')}
  }
  h1 {
    position: absolute;
    top: 30%;
    left: 40%;
    transform: translateY(-50%) translateX(-50%);
    display: block;
    padding: 3rem 6rem;
    background: rgba(255,255,255, .9);
    font-size: 10rem;
  }
`;

const BigBackground = ({ img, shadow, desaturate, children, ...props }) => {
  const { asset } = img;
  return (
    <Figure
      centered={img.centered}
      shadow={shadow}
      desaturate={desaturate}
      {...props}
    >
      <div className="effects" />
      <Img
        fluid={asset.fluid}
        style={{ }}
        imgStyle={{ }}
      />
      {children}
    </Figure>
  );
};

BigBackground.defaultProps = {
  shadow: false,
  desaturate: false,
};

BigBackground.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.object.isRequired,
  shadow: PropTypes.bool,
  desaturate: PropTypes.bool,
};

export default BigBackground;
