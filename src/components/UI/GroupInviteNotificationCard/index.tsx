import React from 'react';
import { useDispatch } from 'react-redux';
import { MdCheck, MdClose } from 'react-icons/md';
import UseFullDate from '../../../hooks/UseFullDate';
import {
  Card, TextContainer, Emphasis, Section, Data, ActionButton, ButtonsContainer,
} from './styles';
import { GroupInviteNotificationGroup, GroupInviteNotificationUser } from '../../../redux/Notifications/interface';
import { answerChatroomInvitation, getChatroomDetails } from '../../../service/chatrooms';
import { joinChatroom } from '../../../redux/Chatrooms/action';
import { mapearDadosChatrooms } from '../../../service/chatrooms/mapearRespostaAPI';

interface Props {
  thisUserId: string,
  user: GroupInviteNotificationUser,
  group: GroupInviteNotificationGroup,
  inviteDate: Date
  onAction: (accepted: boolean) => void
}

const GroupInviteNotificationCard: React.FC<Props> = (props: Props) => {
  const {
    user, group, inviteDate, onAction, thisUserId,
  } = props;
  const invitationDate = UseFullDate(new Date(inviteDate), { withHours: true });
  const dispatch = useDispatch();

  const answerInvitation = async (accepted: boolean) => {
    try {
      await answerChatroomInvitation({
        groupId: group.id,
        invitedBy: user.id,
        userId: thisUserId,
      }, accepted);
      await getJoinedChatroomDetails(accepted);
      onAction(accepted);
    } catch (error) {
      console.log('ainda não implementado');
    }
  };

  const getJoinedChatroomDetails = async (accepted: boolean) => {
    if (accepted) {
      try {
        const { data } = await getChatroomDetails(group.id);
        const dadosMapeadosRedux = mapearDadosChatrooms([data]);
        dispatch(joinChatroom(dadosMapeadosRedux[0]));
      } catch (error) {
        console.log('não implementado');
      }
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
