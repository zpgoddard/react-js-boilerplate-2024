import styled from 'styled-components';

export const AppBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text}
`;
