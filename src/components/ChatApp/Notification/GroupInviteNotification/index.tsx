import React from 'react';
import {
  Container, Photo, MessageContainer, User, Message,
} from './styles';

interface Props {
  photo: string,
  userName: string,
  groupName: string
}

const NotificationCard: React.FC<Props> = (props: Props) => {
  const { photo, groupName, userName } = props;
  return (
    <Container>
      <Photo />
      <MessageContainer>
        <Message>
          <User>
            {userName}
          </User>
          convidou você para participar do grupo
          {' '}
          {groupName}
        </Message>
      </MessageContainer>
    </Container>
  );
};

export default NotificationCard;
