import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  height: calc(100vh - (68px + 146px + 28px + 20px ));
  overflow-y: scroll;
  scrollbar-width: thin;
  padding: 0 22px;

  &::-webkit-scrollbar{
    width: 5px;
    background-color: #1E232B;
  }

  
  &::-webkit-scrollbar-thumb{
    width: 5px;
    background-color: #12161B;
  }

`;

export default {};
