import React from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import UseFullDate from '../../../hooks/UseFullDate';
import {
  Card, TextContainer, Emphasis, Section, Data, ActionButton, ButtonsContainer,
} from './styles';

interface User {
  userId: string,
  name: string,
  lastName: string
}

interface Group {
  groupId: string,
  groupName: string
}

interface Props {
  user: User,
  group: Group,
  inviteDate: Date
}

const GroupInviteNotificationCard: React.FC<Props> = (props: Props) => {
  const { user, group, inviteDate } = props;
  const invitationDate = UseFullDate(new Date(inviteDate));

  const renderText = () => {
    const { name, lastName } = user;
    const fullName = `${name} ${lastName}`;
    return (
      <TextContainer>
        <Emphasis>
          {fullName}
        </Emphasis>
        convidou você para participar do grupo
        <Emphasis>
          {group.groupName}
        </Emphasis>
      </TextContainer>
    );
  };

  return (
    <Card>
      {renderText()}
      <Section>
        <Data>
          {invitationDate}
        </Data>
        <ButtonsContainer>
          <ActionButton
            onClick={() => {}}
            variant="cancel"
          >
            <MdClose />
          </ActionButton>
          <ActionButton
            onClick={() => {}}
            variant="confirm"
          >
            <MdCheck />
          </ActionButton>
        </ButtonsContainer>

      </Section>
    </Card>
  );
};

export default GroupInviteNotificationCard;
