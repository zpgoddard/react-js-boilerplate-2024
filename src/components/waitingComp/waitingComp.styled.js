import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/colors';

const ANIM_SECONDS = 2;

const opacityAnim = keyframes`
  0% {
    opacity: 10%;
  };
  100% {
    opacity: 100%;
  };
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

export const ElipsesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background: ${({ theme }) => theme.primary};
  animation: ${opacityAnim} ${ANIM_SECONDS}s linear infinite alternate;
  animation-delay: ${({ animDelay }) => `${ANIM_SECONDS * animDelay}s`};
  border-radius: 50%;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const WaitingText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.grey};
  font-size: 110%;
  margin-top: 1rem;
  font-style: italic;
`;