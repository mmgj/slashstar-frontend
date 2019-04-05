import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Inner = styled.div`
  background-color: #222;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
`;

const Outer = styled.div`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  border: 1px solid ${props => props.theme.colors.black};
  box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.75);
  overflow: hidden;
  cursor: pointer;
  :focus, :hover {
    ${Inner} {
      transform: scale(1.2);
    }
  }
`;

const ZoomBox = ({ img, height, width }) => (
  <Outer className="zoombox-outer" height={height} width={width}>
    <Inner img={img} />
  </Outer>
);

ZoomBox.defaultProps = {
  height: 100,
  width: 100,
};

ZoomBox.propTypes = {
  img: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default ZoomBox;
