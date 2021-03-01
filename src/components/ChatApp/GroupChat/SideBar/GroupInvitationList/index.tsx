import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../../../redux/interface';
import GroupInviteNotificationCard from '../../../../UI/GroupInviteNotificationCard';
import { Container } from './styles';
import { removeNotification } from '../../../../../redux/Notifications/action';

interface Props {
  isShowing: boolean;
}

const GroupInvitationList: React.FC<Props> = (props: Props) => {
  const { isShowing } = props;
  const { groupInvite } = useSelector((state: StoreState) => state.NotificationsReducer);
  const dispatch = useDispatch();

  const removeInvitationFromRedux = (id: number) => {
    dispatch(removeNotification(id));
  };

  const renderGroupInvitationCards = () => groupInvite.map((invite) => (
    <GroupInviteNotificationCard
      inviteDate={invite.invitationDate}
      group={invite.group}
      user={invite.user}
      key={`${invite.group} ${invite.id}`}
      onAction={() => removeInvitationFromRedux(invite.id)}
    />
  ));

  return isShowing ? (
    <Container>
      {renderGroupInvitationCards()}
    </Container>
  ) : null;
};

export default GroupInvitationList;
