import styled from 'styled-components';

export const Container = styled.div`
  background: #302f31;
  padding: 5px;
  width: 85%;

  .historico_menssagens {
    background: rgb(48, 47, 49);
    border: 1px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(231, 71, 220, 1) 0%,
      rgba(255, 207, 0, 1) 100%
    );
    border-image-slice: 1;
    height: 550px;
    overflow-y: scroll;
  }

  .historico_menssagens::-webkit-scrollbar {
    width: 10px;
  }

  .historico_menssagens::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
  }

  .historico_menssagens::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.30);
    border-radius: 20px;
    border: 1px solid rgb(29, 26, 26);
  }
`;

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    padding: 7px 5px;
    width: 10%;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid transparent;
  border-image: linear-gradient(
    90deg,
    rgba(231, 71, 220, 1) 0%,
    rgba(255, 207, 0, 1) 100%
  );
  border-image-slice: 1;
  border-radius: 5px;
  padding: 5px;
  width: 89%;
  resize: none;
  outline: 0;
  font-size: 15px;
  color: #fff;
  background: rgb(48, 47, 49);
`;