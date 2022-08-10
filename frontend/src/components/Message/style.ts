import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  .messageList {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    flex: 1;

    .message {
      max-width: 440px;

      > p {
        color: white;
        font-family: "Poppins", sans-serif;
        font-size: 12px;
      }
    }
    }

    .messageUser {
      color: #CCC;
      
      span {
        word-break: break-word;
        font-family: "Poppins", sans-serif;
        font-size: 18px;
      }
    }
`;