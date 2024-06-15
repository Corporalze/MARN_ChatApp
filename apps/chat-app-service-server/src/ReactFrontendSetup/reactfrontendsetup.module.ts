import { Module } from "@nestjs/common";
import { ReactFrontendSetupService } from "./reactfrontendsetup.service";
import { ReactFrontendSetupController } from "./reactfrontendsetup.controller";
import { ReactFrontendSetupResolver } from "./reactfrontendsetup.resolver";

@Module({
  controllers: [ReactFrontendSetupController],
  providers: [ReactFrontendSetupService, ReactFrontendSetupResolver],
  exports: [ReactFrontendSetupService],
})
export class ReactFrontendSetupModule {}
