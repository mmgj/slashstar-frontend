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
  .gatsby-image-wrapper {
    ${props => (props.centered ? 'top: 50%; transform: translateY(-50%);' : '')}
  }
`;

const BigImage = ({ img }) => {
  const { asset } = img;
  return (
    <Figure centered={img.centered}>
      <Img
        fluid={asset.fluid}
        style={{ }}
        imgStyle={{ }}
      />
    </Figure>
  );
};


BigImage.propTypes = {
  img: PropTypes.object.isRequired,
};

export default BigImage;
