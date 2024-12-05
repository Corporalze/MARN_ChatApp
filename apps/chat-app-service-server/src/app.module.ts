import { Module } from "@nestjs/common";
import { MessageModule } from "./message/message.module";
import { ParticipantModule } from "./participant/participant.module";
import { ChatRoomModule } from "./chatRoom/chatRoom.module";
import { UserModule } from "./user/user.module";
import { AuthenticationComponentModule } from "./AuthenticationComponent/authenticationcomponent.module";
import { FrontendComponentsModule } from "./FrontendComponents/frontendcomponents.module";
import { FrontendSetupModule } from "./FrontendSetup/frontendsetup.module";
import { ReactFrontendSetupModule } from "./ReactFrontendSetup/reactfrontendsetup.module";
import { SetupReactProjectModule } from "./SetupReactProject/setupreactproject.module";
import { TailwindIntegrationModule } from "./TailwindIntegration/tailwindintegration.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    MessageModule,
    ParticipantModule,
    ChatRoomModule,
    UserModule,
    AuthenticationComponentModule,
    FrontendComponentsModule,
    FrontendSetupModule,
    ReactFrontendSetupModule,
    SetupReactProjectModule,
    TailwindIntegrationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
