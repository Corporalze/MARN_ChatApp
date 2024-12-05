import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { ParticipantUpdateManyWithoutUsersInput } from "./ParticipantUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  participants?: ParticipantUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
