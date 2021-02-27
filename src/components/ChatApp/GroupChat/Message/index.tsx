import React from 'react';
import UseFullDate from '../../../../hooks/UseFullDate';
import {
  Container, InfoContainer, PhotoContainer, Photo, MessageContainer, MessageLine, Name, SendAt,
} from './styles';

interface User {
  name: string
  photo: string
}

interface Props {
  lines: Array<string>,
  sendAt: Date,
  user: User
}

const Message = (props: Props) => {
  const { lines, sendAt, user } = props;
  const { name, photo } = user;
  const messageDate = UseFullDate(new Date(sendAt), { withHours: true });

  const renderUserInfo = () => (
    <InfoContainer>
      <Name>
        {name}
      </Name>
      <SendAt>
        {messageDate}
      </SendAt>
    </InfoContainer>
  );

  const renderLines = () => lines.map((line) => (
    <MessageLine>
      {line}
    </MessageLine>
  ));

  return (
    <Container>
      <PhotoContainer>
        <Photo
          width={48}
          height={48}
          src={photo}
        />
      </PhotoContainer>
      <MessageContainer>
        {renderUserInfo()}
        {renderLines()}
      </MessageContainer>
    </Container>
  );
};

export default Message;
