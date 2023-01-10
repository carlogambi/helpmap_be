import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  ILanguageInfosSchema,
  LanguageInfos,
} from "src/schemas/languageInfos.schema";

@Injectable()
export class LanguageInfosService {
  constructor(
    @InjectModel(LanguageInfos.name) private model: Model<LanguageInfos>
  ) {}

  list = async (
    id?: string,
    category?: string
  ): Promise<ILanguageInfosSchema[]> => {
    const query: { id?: string; category?: string } = {};
    if (id) query.id = id;
    if (category) query.category = category;
    return await this.model.find(query);
  };

  create = async (newInfo: ILanguageInfosSchema): Promise<boolean> => {
    try {
      await this.model.create(newInfo);
      return true;
    } catch (err) {
      return false;
    }
  };

  update = async (
    id: string,
    InfoToUpdate: Partial<ILanguageInfosSchema>
  ): Promise<boolean> => {
    try {
      await this.model.updateOne({ id }, InfoToUpdate);
      return true;
    } catch (err) {
      return false;
    }
  };

  delete = async (id: string): Promise<boolean> => {
    try {
      await this.model.deleteOne({ id });
      return true;
    } catch (err) {
      return false;
    }
  };
}
