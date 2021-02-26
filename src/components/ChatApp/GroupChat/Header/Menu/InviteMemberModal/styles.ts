import styled from 'styled-components';

export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #EEEEEE;
  margin-bottom: 31px;
  text-transform: uppercase;
`;

export const Legenda = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #EEEEEE;
  margin-bottom: 14px;
`;

export const LinkContainer = styled.div`
  padding: 20px 0;
  border: 1px solid #FFD369;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  > ${Legenda} {
    margin: 0;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  padding: 0 150px;
`;
