import { Controller, Get, Post, Query } from '@nestjs/common';
import { ITestSchema } from 'src/schemas/test.schema';
import { BackofficeService } from './backoffice.service';

@Controller('backoffice')
export class BackofficeController {
  constructor(private readonly appService: BackofficeService) {}

  @Get('test')
  async insert(): Promise<ITestSchema[]> {
    return await this.appService.get();
  }
  @Post('insert/test')
  async getHello(@Query('text') text: string): Promise<boolean> {
    return await this.appService.set(text);
  }
}
