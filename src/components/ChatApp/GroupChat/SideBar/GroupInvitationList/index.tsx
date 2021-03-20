import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../../../../redux/interface';
import GroupInviteNotificationCard from '../../../../UI/GroupInviteNotificationCard';
import { Container } from './styles';
import { removeNotification, loadNotifications } from '../../../../../redux/Notifications/action';
import { GroupInviteNotification } from '../../../../../redux/Notifications/interface';

interface Props {
  isShowing: boolean;
}

const GroupInvitationList: React.FC<Props> = (props: Props) => {
  const { isShowing } = props;
  const { NotificationsReducer, UserReducer } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();

  const removeInvitationFromRedux = (
    invite: GroupInviteNotification,
    invitationAccepted: boolean,
  ) => {
    if (invitationAccepted) {
      const novasNotificacoes = NotificationsReducer.groupInvite.filter(
        (invitationRedux) => !(invitationRedux.group.id === invite.group.id
        && invite.user.id === invitationRedux.user.id),
      );
      dispatch(loadNotifications(novasNotificacoes));
    } else {
      dispatch(removeNotification(invite.id));
    }
  };

  const renderGroupInvitationCards = () => NotificationsReducer.groupInvite.map((invite) => (
    <GroupInviteNotificationCard
      inviteDate={invite.invitationDate}
      group={invite.group}
      user={invite.user}
      key={`${invite.group} ${invite.id}`}
      onAction={(accepted: boolean) => removeInvitationFromRedux(invite, accepted)}
      thisUserId={UserReducer.id}
    />
  ));

  return isShowing ? (
    <Container>
      {renderGroupInvitationCards()}
    </Container>
  ) : null;
};

export default GroupInvitationList;
