import styled from 'styled-components';
import { Container as FormItem } from '../FormItem/styles';

export const Container = styled.div`

`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  line-height: 44px;
  color: #EEEEEE;
  font-weight: bold;
`;

export const FieldsContainer = styled.div`
  margin: 29px 0 40px;
  > ${FormItem}{
    margin-bottom: 23px;
    
    &:last-child{
      margin: 0;
    }
  }
`;
