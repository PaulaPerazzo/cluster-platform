import React from 'react';
import { Button } from './styles';

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const MainButton: React.FC<ButtonProps> = ({ onClick, text }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default MainButton;
