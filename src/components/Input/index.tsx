import React from 'react';
import { Container, InputWrapper, Text } from './styles';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
      <Container>
        <Text>{placeholder}</Text>
        <InputWrapper placeholder={placeholder} value={value} onChange={onChange} />
      </Container>
    )
};

export default Input;
