import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import {
  ILanguageInfosSchema,
  LanguageInfos,
} from "src/schemas/languageInfos.schema";
import { LanguageInfosService } from "./languageInfos.service";

@Controller("languagesInfo")
export class LanguageInfosController {
  constructor(private readonly service: LanguageInfosService) {}

  @Get("")
  async list(
    @Query("id") id?: string,
    @Query("category") category?: string
  ): Promise<ILanguageInfosSchema[]> {
    return await this.service.list(id, category);
  }

  @Post("")
  async create(@Body() newLang: ILanguageInfosSchema): Promise<boolean> {
    return await this.service.create(newLang);
  }

  @Put("")
  async update(
    @Query("id") id: string,
    @Body() languageInfo: Partial<ILanguageInfosSchema>
  ): Promise<boolean> {
    return await this.service.update(id, languageInfo);
  }

  @Delete("")
  async delete(@Query("id") langId: string): Promise<boolean> {
    return await this.service.delete(langId);
  }
}
