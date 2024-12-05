import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { ParticipantCreateNestedManyWithoutChatRoomsInput } from "./ParticipantCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  name?: string | null;
  participants?: ParticipantCreateNestedManyWithoutChatRoomsInput;
};
