import { colors } from '../../styles/colors';
import styled from 'styled-components';

const HORIZONTAL_PADDING = 1.5; // in em
const VERTICAL_PADDING = 1; // in em

export const StyledInput = styled.input`
  background: ${colors.white};
  font-size: 100%;

  height: calc(100% - ${VERTICAL_PADDING * 2}em);
  width: calc(100% - ${HORIZONTAL_PADDING * 2}em);

  padding-left: ${HORIZONTAL_PADDING}em;
  padding-right: ${HORIZONTAL_PADDING}em;
  padding-top: ${VERTICAL_PADDING}em;
  padding-bottom: ${VERTICAL_PADDING}em;

  border-radius: 25px;
  border: none;

  &: focus {
    outline: none;
    box-shadow: 0px 0px 0px 0.15em ${({ theme }) => theme.accent};
  }

  &:: placeholder {
    font-size: 100%;
    font-style: italic;
  }
`;