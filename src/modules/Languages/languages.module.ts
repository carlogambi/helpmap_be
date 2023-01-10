import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';

@Module({
  imports: [],
  controllers: [LanguagesController],
  providers: [LanguagesService],
})
export class LanguagesModule {}
