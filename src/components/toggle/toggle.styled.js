import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ToggleBackground = styled.div`
  width: 100%;
  height: 100%;

  font-size: 100%;

  position: relative;

  border-radius: 99px;

  background: ${colors.white};

  cursor: pointer;

  user-select: none;
`;

export const TogglePoint = styled.div`
  position: absolute;
  height: 100%;
  width: 55%;
  border-radius: 99px;
  background: ${({ isPositive, theme }) => isPositive ? theme.primary : colors.grey};
  left: ${({ isPositive }) => isPositive ? '45%' : '0px'};

  //padding-left: ${({ isPositive }) => isPositive ? '0%' : '5%'};
  //padding-right: ${({ isPositive }) => isPositive ? '5%' : '0%'};

   transition: all 0.2s ease-out;
`;

export const TextWrappers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Text = styled.div`
  display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
  align-items:center;
  justify-content: center;
  width: 55%;
  height: 100%;
  position: absolute;

  color: ${({ isPositive, theme }) => isPositive ? theme.text : colors.grey};
`;

export const PositiveText = styled(Text)`
  right: 0px;
`;

export const NegativeText = styled(Text)`
  left: 0px;
`;