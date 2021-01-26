import styled from 'styled-components';
import { Card } from '../../GroupCard/styles';

export const Container = styled.div`
  margin-top: 20px;
  > ${Card} {
    margin-bottom: 27px;

    &:last-child{
      margin: 0;
    }
  } 
`;

export default {};
