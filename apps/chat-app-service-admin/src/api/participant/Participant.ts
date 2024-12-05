import { ChatRoom } from "../chatRoom/ChatRoom";
import { User } from "../user/User";

export type Participant = {
  chatRoom?: ChatRoom | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
