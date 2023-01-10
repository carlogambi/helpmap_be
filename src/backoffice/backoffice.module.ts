import { Module } from '@nestjs/common';
import { BackofficeController } from './backoffice.controller';
import { BackofficeService } from './backoffice.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { TestSchema } from 'src/schemas/test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'test', schema: TestSchema }]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'helpmap-backoffice', 'build'),
    }),
  ],
  controllers: [BackofficeController],
  providers: [BackofficeService],
})
export class BackofficeModule {}
