import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category {
  @Prop()
  type: string;
  @Prop()
  img: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

export interface ICategorySchema extends Document {
  readonly type: string;
  readonly img: string;
  readonly descriptionIds: [string];
}
