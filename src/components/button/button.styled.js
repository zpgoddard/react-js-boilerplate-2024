import { colors } from '../../styles/colors';
import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: 100%;
  background: ${({ color, isDisabled, theme }) => isDisabled ? colors.grey : color ? color : theme.primary};
  border: none;
  border-radius: 5px;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  color: ${({ isDisabled, theme }) => isDisabled ? colors.darkGrey : theme.text};
  cursor: ${({ isDisabled }) => isDisabled ? 'default' : 'pointer'};
`;