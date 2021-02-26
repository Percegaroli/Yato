import styled from 'styled-components';

export const ModalCard = styled.div`
  background-color: #393E46;
  padding: 38px 0;
  border-radius: 18px;
  z-index: 6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 5;
`;
