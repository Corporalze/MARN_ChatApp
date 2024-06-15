import * as graphql from "@nestjs/graphql";
import { ReactFrontendSetupService } from "./reactfrontendsetup.service";

export class ReactFrontendSetupResolver {
  constructor(protected readonly service: ReactFrontendSetupService) {}
}
