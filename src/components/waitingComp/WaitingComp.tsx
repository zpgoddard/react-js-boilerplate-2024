import { Circle, ElipsesWrapper, WaitingText, Wrapper } from './waitingComp.styled';
import { React } from 'react';

interface WaitingCompPropTypes {
  waitingText: string
}

const WaitingComp = ({waitingText}: WaitingCompPropTypes) => (
  <Wrapper>
    <ElipsesWrapper>
      <Circle animDelay={0} />
      <Circle animDelay={0.25} />
      <Circle animDelay={0.5} />
      <Circle animDelay={0.75} />
      <Circle animDelay={1} />
    </ElipsesWrapper>
    <WaitingText>
      {waitingText}
    </WaitingText>
  </Wrapper>
);

export default WaitingComp;