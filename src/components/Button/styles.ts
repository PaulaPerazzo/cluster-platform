import styled from 'styled-components';

export const Button = styled.button`
  background-color: #DB2525;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease; /* Adiciona uma transição suave */

  &:hover {
    background-color: #B30000; /* Cor mais escura */
  }
`;
