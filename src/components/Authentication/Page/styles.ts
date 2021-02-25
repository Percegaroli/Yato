import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #222831;
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 38px 65px;
  border-radius: 18px;
  background: #393E46;
  box-shadow: 2px 4px 6px rgba(27, 27, 27, 0.2);
  > div {
    margin-right:  65px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
