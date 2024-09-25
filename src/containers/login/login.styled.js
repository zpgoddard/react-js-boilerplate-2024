import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CONTAINER_WIDTH_PADDING = 50;
const CONTAINER_HEIGHT_PADDING = 33;

export const LogInContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  //height: 40vh;
  //max-height: 450px;
  //min-height: 250px;

  width: 25vw;
  max-width: 500px;
  min-width: 250px;

  padding-top: ${CONTAINER_HEIGHT_PADDING}px;
  padding-bottom: ${CONTAINER_HEIGHT_PADDING}px;
  padding-left: ${CONTAINER_WIDTH_PADDING}px;
  padding-right: ${CONTAINER_WIDTH_PADDING}px;
`;

export const TitlesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClientName = styled.div`
  font-weight: 800;
  font-size: 120%;
`;

export const LogInTitle = styled.div`
  font-weight: 800;
  font-size: 110%;
`;


export const InputsWrapper = styled.div`
  width: 100%;
  margin-top: 7%;
  margin-bottom: 12%;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const UsernameInput = styled(InputWrapper)`
`;

export const PasswordInput = styled(InputWrapper)`
  margin-top: 5%;
`;

export const InputLabel = styled.div`
  margin-left: 5%;
  margin-bottom: 2%;
`;

export const TextInputWrapper = styled.div`
  font-size: 80%;
`;

export const LogInButtonWrapper = styled.div`
  width: 66%;
`;