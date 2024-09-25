import SVG from 'react-inlinesvg';
import styled from 'styled-components';

export const StyledSVG = styled(SVG)`
width: 100%;
height: 100%;
& path {
  fill: ${({ color }) => color};
  stroke: ${({ stroke }) => stroke};
}
`;