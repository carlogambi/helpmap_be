import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IPositionSchema, Position } from "src/schemas/place.schema";

@Injectable()
export class PositionService {
  constructor(@InjectModel(Position.name) private model: Model<Position>) {}

  list = async (
    id?: string,
    category?: string
  ): Promise<IPositionSchema[]> => {
    const query: { id?: string; category?: string } = {};
    if (id) query.id = id;
    if (category) query.category = category;
    return await this.model.find(query);
  };

  create = async (newInfo: IPositionSchema): Promise<boolean> => {
    try {
      await this.model.create(newInfo);
      return true;
    } catch (err) {
      return false;
    }
  };

  update = async (
    id: string,
    InfoToUpdate: Partial<IPositionSchema>
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