import * as graphql from "@nestjs/graphql";
import { AuthenticationComponentService } from "./authenticationcomponent.service";

export class AuthenticationComponentResolver {
  constructor(protected readonly service: AuthenticationComponentService) {}
}
