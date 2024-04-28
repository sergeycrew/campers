import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(10, 10, 10, 0.495);

  z-index: 10000;
`;

export const Modal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  overflow: scroll;
  scrollbar-color: #d9d9d9;
  transform: translate(-50%, -50%);

  width: 600px;
  height: 300px;
  max-height: 95%;
  overflow-y: auto;

  background-color: #fff;
  border-radius: 20px;

  text-align: center;

  scrollbar-width: 8px;
  scrollbar-color: #d9d9d9;
  ::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
    position: absolute;
    right: 16px; /* 16px from the right side */
  }

  ::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 7px; /* Roundness of the scrollbar */
  }
  ::-webkit-scrollbar {
    height: 264px; /* Height of the scrollbar */
  }

  @media screen and (max-width: 374px) {
    ${(props) => props.theme.modal320Styles}
  }

  ${(props) => props.theme.modalStyles}

  @media screen and (min-width: 768px) {
    ${(props) => props.theme.modalTabletStyles}
  }
  @media screen and (min-width: 1440px) {
    ${(props) => props.theme.modalDesktopStyles}
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 40px;
  right: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #fefefe;
  align-items: center;
  padding: 0px;
`;
