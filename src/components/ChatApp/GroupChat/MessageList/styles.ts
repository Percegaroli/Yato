import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2px;
  padding: 32px 42px;
  height: calc(100vh - (124px + 2px + 112px));
  overflow-y: scroll;
  scrollbar-width: thin;
  width: 100%;
  flex: 1;

  &::-webkit-scrollbar{
    width: 8px;
    background-color: #1E232B;
  }

  
  &::-webkit-scrollbar-thumb{
    background-color: #12161B;
  }
`;

export default {};
