import { Module } from "@nestjs/common";
import { FrontendComponentsService } from "./frontendcomponents.service";
import { FrontendComponentsController } from "./frontendcomponents.controller";
import { FrontendComponentsResolver } from "./frontendcomponents.resolver";

@Module({
  controllers: [FrontendComponentsController],
  providers: [FrontendComponentsService, FrontendComponentsResolver],
  exports: [FrontendComponentsService],
})
export class FrontendComponentsModule {}
