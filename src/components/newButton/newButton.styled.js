import { colors } from '../../styles/colors';
import styled from 'styled-components';

export const NewButtonWrapper = styled.div`
  width: calc(100% - 5px);
  height: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ isHovered, theme }) => isHovered ? theme.primary : 'none'};

  border-radius: 10px;
  border-style: ${({ isHovered }) => isHovered ? 'solid' : 'dashed'};
  border-color: ${({ isHovered, theme }) => isHovered ? theme.primary : colors.grey};

  cursor: pointer;
`;

export const Plus = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50%;
  width: 100%;

  color: ${({ isHovered, theme }) => isHovered ? theme.text : colors.grey};
  text-align: center;
  user-select: none;
`;