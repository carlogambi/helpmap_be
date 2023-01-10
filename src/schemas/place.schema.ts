import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Position {
  @Prop()
  lat: number;
  @Prop()
  long: number;
  @Prop()
  address: string;
  @Prop()
  type: string;
  @Prop()
  images: [string];
}
export const PositionSchema = SchemaFactory.createForClass(Position);

export interface IPositionSchema extends Document {
  readonly lat: number;
  readonly long: number;
  readonly address: string;
  readonly type: string;
  readonly images: [string];
  readonly descriptionsIds: [string];
}
