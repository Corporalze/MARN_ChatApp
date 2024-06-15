import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { ParticipantUpdateManyWithoutChatRoomsInput } from "./ParticipantUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  name?: string | null;
  participants?: ParticipantUpdateManyWithoutChatRoomsInput;
};
