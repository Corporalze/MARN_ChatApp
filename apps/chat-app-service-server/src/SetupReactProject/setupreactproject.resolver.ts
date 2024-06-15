import * as graphql from "@nestjs/graphql";
import { SetupReactProjectService } from "./setupreactproject.service";

export class SetupReactProjectResolver {
  constructor(protected readonly service: SetupReactProjectService) {}
}
