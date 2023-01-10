import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguagesController } from '../Languages/languages.controller';
import { LanguagesService } from '../Languages/languages.service';

@Module({
  imports: [],
  controllers: [LanguagesController],
  providers: [LanguagesService],
})
export class PlacesModule {}
