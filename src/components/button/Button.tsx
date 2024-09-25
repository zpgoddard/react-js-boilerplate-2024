import { React } from 'react';
import { StyledButton } from './button.styled.js';

interface ButtonPropTypes {
  handleClick: () => void,
  text: string,
  isDisabled?: boolean,
  color?: string
}

const Button = ({
  handleClick, 
  text,
  isDisabled,
  color
}: ButtonPropTypes) => (
  <StyledButton
    isDisabled={isDisabled}
    onClick={isDisabled ? null : handleClick}
    value={text}
    color={color}
  >
    {text}
  </StyledButton>
  
);

export default Button;