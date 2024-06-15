import { Module } from "@nestjs/common";
import { TailwindIntegrationService } from "./tailwindintegration.service";
import { TailwindIntegrationController } from "./tailwindintegration.controller";
import { TailwindIntegrationResolver } from "./tailwindintegration.resolver";

@Module({
  controllers: [TailwindIntegrationController],
  providers: [TailwindIntegrationService, TailwindIntegrationResolver],
  exports: [TailwindIntegrationService],
})
export class TailwindIntegrationModule {}
