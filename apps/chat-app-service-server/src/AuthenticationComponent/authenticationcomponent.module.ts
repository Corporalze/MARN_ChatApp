import { Module } from "@nestjs/common";
import { AuthenticationComponentService } from "./authenticationcomponent.service";
import { AuthenticationComponentController } from "./authenticationcomponent.controller";
import { AuthenticationComponentResolver } from "./authenticationcomponent.resolver";

@Module({
  controllers: [AuthenticationComponentController],
  providers: [AuthenticationComponentService, AuthenticationComponentResolver],
  exports: [AuthenticationComponentService],
})
export class AuthenticationComponentModule {}
