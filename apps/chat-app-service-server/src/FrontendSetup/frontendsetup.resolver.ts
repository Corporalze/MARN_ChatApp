import * as graphql from "@nestjs/graphql";
import { FrontendSetupService } from "./frontendsetup.service";

export class FrontendSetupResolver {
  constructor(protected readonly service: FrontendSetupService) {}
}
