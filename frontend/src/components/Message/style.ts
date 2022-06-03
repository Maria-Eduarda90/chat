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
      background: #cccccc;
      padding: 10px;
      position: relative;
      width: 60%;
      border-radius: 8px;

      span {
        word-break: break-word;
        font-family: "Poppins", sans-serif;
        font-size: 18px;
      }
    }
    .messageUser:before { 
      content:''; 
      position: 
      absolute; 
      width:15px; 
      height:15px; 
      left:-7px; 
      top:15px; 
      background:#cccccc; 
      -webkit-transform:rotate(45deg);
  }
`;