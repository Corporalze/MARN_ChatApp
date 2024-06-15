import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SetupReactProjectService } from "./setupreactproject.service";

@swagger.ApiTags("setupReactProjects")
@common.Controller("setupReactProjects")
export class SetupReactProjectController {
  constructor(protected readonly service: SetupReactProjectService) {}
}
