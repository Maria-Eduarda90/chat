import styled from 'styled-components';

export const Container = styled.div`
  background: var(--blue-dark);
  height: 4rem;

  .header {
    margin: 5px;
  }
  .menu-bars {
    font-size: 1.5rem;
  }

  .activate button {
    background: linear-gradient(
      90deg,
      rgba(231, 71, 220, 1) 0%,
      rgba(255, 207, 0, 1) 100%
    );
    color: #fff;
    width: 4rem;
    border-radius: 6px;
    padding: 6px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
  }
`;

export const ContainerSidebar = styled.div`
  .nav-menu {
    background: #3a3939;
    width: 13rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    z-index: 1000;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
      90deg,
      rgba(231, 71, 220, 1) 0%,
      rgba(255, 207, 0, 1) 100%
    );
    border-image-slice: 1;

    .space {
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        p,
        span {
          color: #fff;
          gap: 2px;
          font-family: "Poppins", sans-serif;
          font-size: 13px;
          margin-top: 10px;
        }
      }

      > button {
        background: #5a0202;
        border: none;
        width: 10rem;
        padding: 10px;
        color: #fff;
        font-family: "Poppins", sans-serif;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        margin-top: 30px;
      }

      > button:hover {
        background: #7b0404;
      }
    }
  }

  .nav-menu-items {
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .close {
    color: #fff;
  }
`;