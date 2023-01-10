import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackofficeModule } from './backoffice/backoffice.module';
import { LanguagesModule } from './modules/Languages/languages.module';
import { PlacesModule } from './modules/Places/places.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/helpmap', {
      dbName: 'helpmap',
    }),
    BackofficeModule,
    LanguagesModule,
    PlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
