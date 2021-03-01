import styled from 'styled-components';
import { Container } from '../InviteMemberInput/styles';

export const Text = styled.div`
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #EEEEEE;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #EEEEEE;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const DescriptionContainer = styled.div`
  margin: 15px 0 12px;

  > ${Container} {
    margin-top: 10px;
  }
`;
