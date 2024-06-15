import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReactFrontendSetupService } from "./reactfrontendsetup.service";

@swagger.ApiTags("reactFrontendSetups")
@common.Controller("reactFrontendSetups")
export class ReactFrontendSetupController {
  constructor(protected readonly service: ReactFrontendSetupService) {}
}
