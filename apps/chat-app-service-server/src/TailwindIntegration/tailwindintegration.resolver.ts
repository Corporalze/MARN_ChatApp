import * as graphql from "@nestjs/graphql";
import { TailwindIntegrationService } from "./tailwindintegration.service";

export class TailwindIntegrationResolver {
  constructor(protected readonly service: TailwindIntegrationService) {}
}
