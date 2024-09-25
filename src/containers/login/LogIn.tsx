import { ClientName, InputLabel, InputsWrapper, LogInButtonWrapper, LogInContainer, LogInTitle, PageWrapper, PasswordInput, TextInputWrapper, TitlesWrapper, UsernameInput } from './login.styled.js';
import { React, useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import { useAuth } from '../../hooks/useAuth.tsx';

const LogIn = () => {

  const { logIn } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username === 'user' && password === 'password') {
      // Replace with actual authentication logic
      await logIn({ username });
    } else {
      alert('Invalid username or password');
    }
  };
  
  const handleInputUpdate = (setInputValue) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return(
    <PageWrapper>
      <LogInContainer>
        <TitlesWrapper>
          <LogInTitle>
            {'Showstopper Log In'}
          </LogInTitle>
        </TitlesWrapper>
        <InputsWrapper>
          <UsernameInput>
            <InputLabel>
              {'Username'}
            </InputLabel>
            <TextInputWrapper>
              <TextInput 
                value={username} 
                updateValue={handleInputUpdate(setUsername)} 
                handleSubmit={() => handleLogin(null)} 
              />
            </TextInputWrapper>
          </UsernameInput>
          <PasswordInput>
            <InputLabel>
              {'Password'}
            </InputLabel>
            <TextInputWrapper>
              <TextInput 
                shouldHideText={true} 
                value={password} 
                updateValue={handleInputUpdate(setPassword)} 
                handleSubmit={() => handleLogin(null)} 
              />
            </TextInputWrapper>
          </PasswordInput>
        </InputsWrapper>
        <LogInButtonWrapper>
          <Button 
            handleClick={handleLogin} 
            text={'Log In'} 
            isDisabled={false}
          />
        </LogInButtonWrapper>
      </LogInContainer>
    </PageWrapper>
  );
};

export default LogIn;