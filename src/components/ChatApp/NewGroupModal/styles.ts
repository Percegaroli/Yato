import styled from 'styled-components';
import Button from '../../UI/Button';

export const Title = styled.h1`
  font-size: 36px;
  line-height: 44px;
  color: #EEEEEE;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 95px;
`;

export const SendButton = styled(Button)`
  margin-top: 32px;
  max-width: 250px;
`;
