import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  width: 300px;
  padding: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
  background-size: 400% 400%;
  animation: animate-background-button 10s infinite ease-in-out;
  color: #fff;
  margin-bottom: 20px;

  @keyframes animate-background-button {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;