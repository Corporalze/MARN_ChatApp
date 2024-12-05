import { Module } from "@nestjs/common";
import { SetupReactProjectService } from "./setupreactproject.service";
import { SetupReactProjectController } from "./setupreactproject.controller";
import { SetupReactProjectResolver } from "./setupreactproject.resolver";

@Module({
  controllers: [SetupReactProjectController],
  providers: [SetupReactProjectService, SetupReactProjectResolver],
  exports: [SetupReactProjectService],
})
export class SetupReactProjectModule {}
