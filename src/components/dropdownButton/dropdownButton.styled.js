import styled from 'styled-components';
import { hexAlphaCodes } from '../../styles/css';

export const ListItemHeight = '3'; // in rem

export const DropdownButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) => props.theme.primary};
  font-size: 100%;
  border: none;
  border-radius: 5px;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  height: 1rem;
`;

export const CaratWrapper = styled.div`
  height: 0.8rem;
  display: flex;
  transform: ${({ isFlipped }) => isFlipped ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s;
`;

export const ListChoicesBox = styled.div`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  z-index: -1;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.primary}${hexAlphaCodes[50]};
  align-items: center;
  justify-content: flex-end;

  transform: ${({ itemAmount, isOpen }) => ( isOpen ? `translateY(-${itemAmount + 1.2}rem)` : 'translateY(0)' )};
  transition: transform 0.2s;
`;

export const ListChoice = styled.div`
  width: 90%;
  height: ${ListItemHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  padding-top: ${({ isVisible }) => (isVisible ? '0.25rem' : '0rem' )};
  padding-bottom: ${({ isVisible }) => (isVisible ? '0.25rem' : '0rem' )};
  height: ${({ isVisible }) => (isVisible ? ListItemHeight : '0rem' )};
  

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0' )};
  transition: opacity 0.1s;
  transition: height 0.2s;
  transition: padding-top 0.2s;
  transition: padding-bottom 0.2s;

  &: hover {
    background: ${(props) => props.theme.text}${hexAlphaCodes[20]};;
  };
`;