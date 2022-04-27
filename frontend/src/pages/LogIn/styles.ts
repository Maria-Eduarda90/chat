import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span,
  a {
    color: white;
    margin-left: 30px;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 360;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 700;
  }
`;