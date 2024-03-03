import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { TransformInterceptor } from './lib/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  // ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, enableDebugMessages: true, transform: true, transformOptions: { enableImplicitConversion: true } }));
  app.useGlobalInterceptors(new TransformInterceptor());

  const PORT = configService.getOrThrow('HTTP_PORT')
  await app.listen(PORT);
}
bootstrap();
