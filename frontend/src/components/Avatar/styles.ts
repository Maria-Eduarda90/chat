import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  > div {
    padding: 3px;
    background: linear-gradient(100deg, #ff008e 0%, #ffcd1e 100%);
    border-radius: 50%;
    line-height: 0;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;