import styled from 'styled-components';
import { Card } from '../../../../UI/GroupInviteNotificationCard/styles';

export const Container = styled.div`
  margin-top: 20px;
  > ${Card}{
    margin-bottom: 16px;

    &:last-child {
      margin: 0;
    }
  }
`;

export default {};
