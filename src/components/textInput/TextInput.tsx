import React from 'react';
import { StyledInput } from './textInput.styled.js';

interface TextInputPropTypes {
  value: string,
  // eslint-disable-next-line no-unused-vars
  updateValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholderText?: string,
  autoComplete?: string,
  handleSelect?: () => void, 
  isDisabled?: boolean,
  maxLength?: number, 
  minLength?: number, 
  shouldAutoFocus?: boolean, 
  shouldSpellCheck?: boolean,
  shouldHideText?: boolean,
  handleSubmit?: () => void
}

/** High order re-usable text input component */
const TextInput: React.FC<TextInputPropTypes> = ({
  value,
  updateValue,
  placeholderText,
  autoComplete, 
  handleSelect, 
  isDisabled,
  maxLength, 
  minLength, 
  shouldAutoFocus, 
  shouldSpellCheck,
  shouldHideText,
  handleSubmit
}) => {
  
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && handleSubmit) {
      handleSubmit();
    }
  };

  return (
    <StyledInput 
      type={shouldHideText ? 'password' : 'text'}
      value={value}
      placeholder={placeholderText}
      onChange={updateValue} 
      onSelect={handleSelect}
      maxLength={maxLength} 
      minLength={minLength}
      autoComplete={autoComplete} // not a boolean, if "email" is passed in. ex: will autocomplete with previously used emails
      spellCheck={shouldSpellCheck}
      disabled={isDisabled} 
      autoFocus={shouldAutoFocus}
      onKeyDown={handleEnter}
    />
  );
};

export default TextInput;