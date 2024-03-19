import Image from 'next/image';
import React, { useState } from 'react';
import { CinBackground } from '../../../public/assets';
import { BackgroundContainer, ButtonContainer, Content, LoginContainer, Title } from './styles';
import Input from '@/components/Input';
import MainButton from '@/components/Button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <>
      <BackgroundContainer>
        <LoginContainer>
          <Title>Apuana Infra</Title>
            <Input placeholder={'Login'} value={''} onChange={(e) => console.log(e)} />
            <br />
            <Input placeholder={'Senha'} value={''} onChange={(e) => console.log(e)} />
            <br />
            <ButtonContainer>
              <MainButton onClick={() => console.log('oi')} text={'Entrar'}/>
            </ButtonContainer>
        </LoginContainer>
      </BackgroundContainer>
    </>
  );
};

export default LoginPage;
