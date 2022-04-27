import styled from "styled-components";

export const Modal = styled.div`
  background: #3c3b3b;
  width: 22rem;
  min-height: 20rem;
  border-radius: 8px 8px 0 0;
  padding-top: 2rem;
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(
    90deg,
    rgba(231, 71, 220, 1) 0%,
    rgba(255, 207, 0, 1) 100%
  );
  border-image-slice: 1;
`;
