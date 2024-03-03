import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './lib/config/database.module';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { MeasurementSystemModule } from './measurement-system/measurement-system.module';

// const isDevelopment =
//   process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: [`.env.local, .env.${process.env.NODE_ENV}`],
      validationSchema: joi.object({
        SQL_HOST: joi.string().required(),
        SQL_USER: joi.string().required(),
        SQL_PASSWORD: joi.string().required(),
        SQL_DATABASE: joi.string().required(),
        HTTP_PORT: joi.number().required()
      })
    }),
    DatabaseModule,
    MeasurementSystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
