import styled from "styled-components";

export const BackgroundContainer = styled.div`
  height: 100vh;
  background-image: url('/assets/cin.png');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

export const Content = styled.div`
  text-align: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(193, 193, 193, 0.5); /* Altere o valor de opacidade conforme necessário */;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
  width: 25vw;
  height: 60vh;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: medium;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
`;

export default function Hello() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
