import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Place {
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
export const PlaceSchema = SchemaFactory.createForClass(Place);

export interface IPlaceSchema extends Document {
  readonly lat: number;
  readonly long: number;
  readonly address: string;
  readonly type: string;
  readonly images: [string];
  readonly descriptionsIds: [string];
}
