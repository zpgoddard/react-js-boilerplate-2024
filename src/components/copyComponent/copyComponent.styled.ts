import { colors } from '../../styles/colors';
import styled from 'styled-components';

const BOX_PADDING = '5%';
const COPY_BUTTON_WIDTH = '2rem';
const BORDER_RADIUS = '8px';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
`;

export const TextBox = styled.div`
  background: white;
  color: black;

  width: calc(100% - ${BOX_PADDING} - ${BOX_PADDING} - ${COPY_BUTTON_WIDTH});
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  padding-right: ${BOX_PADDING};
  padding-left: ${BOX_PADDING};

  border-top-left-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: ${BORDER_RADIUS};
`;

export const Text = styled.div<{ isVisible: boolean }>`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: all 0.5s;
`;

export const CopiedText = styled.div<{ isVisible: boolean }>`
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  transition: all 0.4s;
  position: absolute;
`;

export const CopyButton = styled.div<{ hasClicked: boolean }>`
  height: 100%;
  width: ${COPY_BUTTON_WIDTH};
  position: relative;
  background: ${({ hasClicked, theme }) => hasClicked ? colors.green : theme.primary};
  right: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyIcon = styled.div`
  position: absolute;
  height: 66%;
  width: 66%;
`;