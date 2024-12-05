import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantUpdateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
