export interface ChatroomsState {
  chatrooms: Array<ChatroomState>,
  selectedChatroomIndex: number
}

export interface ChatroomState {
  id: string,
  members: Array<Members>,
  messages: Array<Message>
  photo?: string,
  name: string
  newMessages: number
}

export interface Members {
  id: string
  name: string,
  lastName: string,
  photo: string,
  role?: string,
  memberSince: Date
}

export interface Message {
  ownerId: string
  lines: Array<string>,
  sendAt: Date
}
