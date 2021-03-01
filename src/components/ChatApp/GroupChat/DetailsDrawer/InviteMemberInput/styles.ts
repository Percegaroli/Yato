import styled from 'styled-components';

export const SendButton = styled.button`
  height: 100%;
  border: none;
  padding: 13px 8px 12px;
  font: inherit;
  background-color: #222831;;
  border-radius: 0 8px 8px 0;
  text-align: center;
  color: #ACACAC;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  > input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;
