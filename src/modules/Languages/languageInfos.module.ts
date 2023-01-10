import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
  LanguageInfos,
  LanguageInfosSchema,
} from "src/schemas/languageInfos.schema";
import { LanguageInfosController } from "./languageInfos.controller";
import { LanguageInfosService } from "./languageInfos.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LanguageInfos.name, schema: LanguageInfosSchema },
    ]),
  ],
  controllers: [LanguageInfosController],
  providers: [LanguageInfosService],
})
export class LanguageInfosModule {}
