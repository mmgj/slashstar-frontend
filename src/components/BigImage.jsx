import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  position: relative;
  height: 0px;
  width: 100%;
  padding-bottom: calc(9 / 24 * 100%);
  margin: 0;
  border: 1px solid ${props => props.theme.colors.black};
  border-width: 1px 0 1px 0;
  overflow: hidden;
`;

const BigImage = ({ img }) => {
  const { asset } = img;
  return (
    <Figure>
      <Img imgStyle={{ transitionDelay: '0s' }} fluid={asset.fluid} />
    </Figure>
  );
};


BigImage.propTypes = {
  img: PropTypes.object.isRequired,
};

export default BigImage;
