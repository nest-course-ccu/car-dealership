import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // solo deja la data que yo espero (el dto) y remueve la data basura
      forbidNonWhitelisted: true  // retorna un error cuando se envian campos que no espero
    })
  );

  await app.listen(3000);
}
bootstrap();
