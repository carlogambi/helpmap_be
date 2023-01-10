import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITestSchema } from 'src/schemas/test.schema';

@Injectable()
export class BackofficeService {
  constructor(@InjectModel('test') private testModel: Model<ITestSchema>) {}
  set = async (text: string): Promise<boolean> => {
    try {
      return !!(await this.testModel.create({ test: text }));
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  get = async (): Promise<ITestSchema[]> => {
    return await this.testModel.find();
  };
}
