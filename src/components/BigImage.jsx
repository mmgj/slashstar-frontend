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
  border-left: none;
  border-right: none;
  overflow: hidden;

  picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

const BigImage = ({ asset }) => <Figure><Img imgStyle={{ transitionDelay: '0s' }} fluid={asset.fluid} /></Figure>;


BigImage.propTypes = {
  asset: PropTypes.object.isRequired,
};

export default BigImage;
