import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};