import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  position: relative;
  height: 0px;
  padding-bottom: calc(9 / 24 * 100%);
  margin: -1rem;
  border: 1px solid ${props => props.theme.colors.black};
  border-left: none;
  border-right: none;
  overflow: hidden;

  picture {
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: center;
    object-fit: cover;
  }
`;

const BigImage = ({ asset }) => <Figure className="main-image"><Img fluid={asset.fluid} /></Figure>;


BigImage.propTypes = {
  asset: PropTypes.object.isRequired,
};

export default BigImage;
