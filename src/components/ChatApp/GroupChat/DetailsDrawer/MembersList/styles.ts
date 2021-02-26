import styled from 'styled-components';
import { Card } from '../MemberCard/styles';

export const Container = styled.div`
  margin-top: 8px;
  > ${Card} {
    margin-top: 6px;

    &:last-child {
      margin: 0;
    } 
  }
`;

export const MembersQuantity = styled.h5`
  font-size: 9px;
  line-height: 10px;
  color: #EEEEEE;
  font-weight: normal;
  text-align: center;
`;
