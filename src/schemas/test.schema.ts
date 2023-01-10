import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Test {
  @Prop()
  test: string;
}
export const TestSchema = SchemaFactory.createForClass(Test);

export interface ITestSchema extends Document {
  readonly test: string;
}
