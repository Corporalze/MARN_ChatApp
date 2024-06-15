import * as graphql from "@nestjs/graphql";
import { FrontendComponentsService } from "./frontendcomponents.service";

export class FrontendComponentsResolver {
  constructor(protected readonly service: FrontendComponentsService) {}
}
