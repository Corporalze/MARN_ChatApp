import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FrontendSetupService } from "./frontendsetup.service";

@swagger.ApiTags("frontendSetups")
@common.Controller("frontendSetups")
export class FrontendSetupController {
  constructor(protected readonly service: FrontendSetupService) {}
}
