export interface NotificationState {
  groupInvite: Array<GroupInviteNotification>
}

export interface GroupInviteNotification {
  id: number
  user: GroupInviteNotificationUser,
  group: GroupInviteNotificationGroup,
  invitationDate: Date
}

export interface GroupInviteNotificationUser {
  name: string,
  lastName: string
}

export interface GroupInviteNotificationGroup {
  id: string
  name: string
}
