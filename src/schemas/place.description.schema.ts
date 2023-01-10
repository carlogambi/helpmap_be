import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Description {
  @Prop()
  placeId: string;
  @Prop()
  title: string;
  @Prop()
  language: string;
  @Prop()
  intro: string;
  @Prop()
  body: string;
  @Prop()
  footer: string;
  @Prop()
  emails: string;
  @Prop()
  phoneNumbers: string;
}

export const DescriptionSchema = SchemaFactory.createForClass(Description);

export interface IDescriptionSchema extends Document {
  readonly title: string;
  readonly language: string;
  readonly intro: string;
  readonly body: string;
  readonly footer: string;
  readonly emails: string;
  readonly phoneNumbers: string;
}
