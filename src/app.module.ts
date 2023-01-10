import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BackofficeModule } from "./backoffice/backoffice.module";
import { LanguageInfosModule } from "./modules/Languages/languageInfos.module";
import { PositionsModule } from "./modules/Positions/positions.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/helpmap", {
      dbName: "helpmap",
    }),
    BackofficeModule,
    LanguageInfosModule,
    PositionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
