import React from 'react';
import {StyledSVG} from './SVGImg.styled';

interface SVGImgPropTypes {
  src: string,
  color?: string,
  stroke?: string
}

const SVGImg = ({src, color, stroke}: SVGImgPropTypes) => (
  <StyledSVG 
    src={src}
    color={color}
    stroke={stroke}
    title="React"
  />
);

export default SVGImg;