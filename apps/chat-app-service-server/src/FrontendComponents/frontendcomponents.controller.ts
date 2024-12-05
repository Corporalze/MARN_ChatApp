import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FrontendComponentsService } from "./frontendcomponents.service";

@swagger.ApiTags("frontendComponents")
@common.Controller("frontendComponents")
export class FrontendComponentsController {
  constructor(protected readonly service: FrontendComponentsService) {}
}
