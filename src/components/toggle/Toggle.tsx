import { React } from 'react';

import { NegativeText, PositiveText, Text, TextWrappers, ToggleBackground, TogglePoint } from './toggle.styled';

interface TogglePropTypes {
  posText: string,
  negText: string,
  isPositive: boolean,
  handleClick: () => void
}

const Toggle = ({ posText, negText, isPositive, handleClick }: TogglePropTypes) => (
  <ToggleBackground onClick={handleClick}>
    <TogglePoint isPositive={isPositive} />
    <NegativeText isVisible={!!negText} isPositive={!isPositive}>
      {negText}
    </NegativeText>
    <PositiveText isVisible={!!posText} isPositive={isPositive}>
      {posText}
    </PositiveText>
  </ToggleBackground>
);

export default Toggle;