import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #EEEEEE;

`;

export const RadioButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  & >:last-child {
    margin-left: 70px;
  }
`;
