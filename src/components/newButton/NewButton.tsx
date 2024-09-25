import { React, useState} from 'react';
import { NewButtonWrapper, Plus } from './newButton.styled';
import plusIcon from '../../media/icons/plusIcon.svg';
import SVGImg from '../SVGImg';
import { colors } from '../../styles/colors';
import { useTheme } from 'styled-components';

interface NewButtonPropTypes {
  handleClick: () => void,
}

const NewButton = ({ handleClick }: NewButtonPropTypes) => {

  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return(
    <NewButtonWrapper 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      <Plus isHovered={isHovered}>
        <SVGImg 
          src={plusIcon}
          stroke={isHovered ? theme.text : colors.grey}
        />
      </Plus>
    </NewButtonWrapper>
  );};

export default NewButton;