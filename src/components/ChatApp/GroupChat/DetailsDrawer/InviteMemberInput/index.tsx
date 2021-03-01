import React from 'react';
import { useSelector } from 'react-redux';
import { MdSend } from 'react-icons/md';
import InputField from '../../../../UI/InputField';
import { SendButton, Container } from './styles';
import { StoreState } from '../../../../../redux/interface';
import { inviteNewMemberToGroupByEmail } from '../../../../../service/chatrooms';

interface Props {
  value: string,
  onChange: (newValue: string) => void
  className?: string;
}

const InviteMemberInput: React.FC<Props> = (props: Props) => {
  const { value, onChange, className } = props;
  const { ChatroomsReducer, UserReducer } = useSelector((state: StoreState) => state);

  const sendMemberInvitation = async () => {
    const { id } = ChatroomsReducer.chatrooms[ChatroomsReducer.selectedChatroomIndex];
    try {
      await inviteNewMemberToGroupByEmail({
        groupId: id,
        invitedById: UserReducer.id,
        userInvitedEmail: value,
      });
      onChange('');
    } catch (error) {
      console.log('não implementado');
    }
  };

  return (
    <Container className={className}>
      <InputField
        onChange={(event) => onChange(event.target.value)}
        placeholder="usuario@yatochat.com"
        value={value}
      />
      <SendButton onClick={sendMemberInvitation}>
        <MdSend
          fontSize={15}
        />
      </SendButton>
    </Container>
  );
};

InviteMemberInput.defaultProps = {
  className: '',
};

export default InviteMemberInput;
