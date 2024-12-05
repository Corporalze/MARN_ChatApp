import { Module } from "@nestjs/common";
import { FrontendSetupService } from "./frontendsetup.service";
import { FrontendSetupController } from "./frontendsetup.controller";
import { FrontendSetupResolver } from "./frontendsetup.resolver";

@Module({
  controllers: [FrontendSetupController],
  providers: [FrontendSetupService, FrontendSetupResolver],
  exports: [FrontendSetupService],
})
export class FrontendSetupModule {}
