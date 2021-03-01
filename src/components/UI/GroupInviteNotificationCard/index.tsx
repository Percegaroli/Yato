import React from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import UseFullDate from '../../../hooks/UseFullDate';
import {
  Card, TextContainer, Emphasis, Section, Data, ActionButton, ButtonsContainer,
} from './styles';
import { GroupInviteNotificationGroup, GroupInviteNotificationUser } from '../../../redux/Notifications/interface';

interface Props {
  user: GroupInviteNotificationUser,
  group: GroupInviteNotificationGroup,
  inviteDate: Date
  onAction: () => void
}

const GroupInviteNotificationCard: React.FC<Props> = (props: Props) => {
  const {
    user, group, inviteDate, onAction,
  } = props;
  const invitationDate = UseFullDate(new Date(inviteDate), { withHours: true });

  const answerInvitation = (accepted: boolean) => {
    try {
      console.log('ainda não implementado', accepted);
      onAction();
    } catch (error) {
      console.log('ainda não implementado');
    }
  };
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
          {group.name}
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
            onClick={() => answerInvitation(false)}
            variant="cancel"
          >
            <MdClose />
          </ActionButton>
          <ActionButton
            onClick={() => answerInvitation(true)}
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
