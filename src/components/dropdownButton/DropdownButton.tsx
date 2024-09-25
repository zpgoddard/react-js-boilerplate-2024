import { React, useState } from 'react';
import { CaratWrapper, DropdownButtonWrapper, IconWrapper, ListChoice, ListChoicesBox } from './dropdownButton.styled';
import SVGImg from '../SVGImg';
import { useTheme } from 'styled-components';
import downCarat from '../../media/icons/downCarat.svg';

interface DropdownButtonPropTypes {
  icon: img,
  value: string,
  valueList: [],
  handleValueChange: () => void,
}

const DropdownButton = ({ icon, value, valueList, handleValueChange }: DropdownButtonPropTypes) => {
  
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownButtonWrapper onClick={() => setIsOpen(!isOpen)} >
      <IconWrapper>
        <SVGImg 
          src={icon} 
          color={theme.text}
        />
      </IconWrapper>
      <div>
        {value}
      </div>
      <CaratWrapper 
        isFlipped={isOpen}
      >
        <SVGImg 
          src={downCarat} 
          color={theme.text}
        />
      </CaratWrapper>
      <ListChoicesBox isOpen={isOpen} itemAmount={valueList.length} >
        {valueList.map((item, i) => (
          <ListChoice 
            key={item.value}
            onClick={handleValueChange(i)} 
            isVisible={isOpen} 
          >
            {item.label}
          </ListChoice>
        ))}
      </ListChoicesBox>
    </DropdownButtonWrapper>
  );};

export default DropdownButton;