import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationComponentService } from "./authenticationcomponent.service";

@swagger.ApiTags("authenticationComponents")
@common.Controller("authenticationComponents")
export class AuthenticationComponentController {
  constructor(protected readonly service: AuthenticationComponentService) {}
}
