import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TailwindIntegrationService } from "./tailwindintegration.service";

@swagger.ApiTags("tailwindIntegrations")
@common.Controller("tailwindIntegrations")
export class TailwindIntegrationController {
  constructor(protected readonly service: TailwindIntegrationService) {}
}
