import { CopiedText, CopyButton, CopyIcon, Text, TextBox, Wrapper} from './copyComponent.styled.ts';
import { React, useState } from 'react';
import SVGImg from '../SVGImg';
import copyIcon from '../../media/icons/copyIcon.svg';

interface CopyComponentPropTypes {
  copyText: string
}

const SHOW_COPIED_TIME = 2500;

const CopyComponent = ({ copyText }: CopyComponentPropTypes) => {

  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(copyText);
    setHasClicked(true);
    setTimeout(() => {
      setHasClicked(false);
    }, SHOW_COPIED_TIME);
  };
  
  return (
    <Wrapper>
      <TextBox>
        <Text id="copyText" isVisible={!hasClicked} >
          { copyText }
        </Text>
        <CopiedText isVisible={hasClicked} >
          { 'COPIED!' }
        </CopiedText>
      </TextBox>
      <CopyButton 
        onClick={handleClick}
        hasClicked={hasClicked}
      >
        <CopyIcon>
          <SVGImg 
            stroke={'white'} 
            color={'white'} 
            src={copyIcon}
          />
        </CopyIcon>
      </CopyButton>
    </Wrapper>
  );
};

export default CopyComponent;