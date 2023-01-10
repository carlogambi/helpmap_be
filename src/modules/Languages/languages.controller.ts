import { Controller, Get } from '@nestjs/common';
import { LanguagesService } from './languages.service';

@Controller()
export class LanguagesController {
  constructor(private readonly service: LanguagesService) {}

  @Get('test')
  test(): string {
    return this.service.test();
  }
}
