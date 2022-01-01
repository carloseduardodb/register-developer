import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './common/validation.pipe';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    //desabilitar cors para todos os dominios
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Register Developer API')
    .setDescription('The Register Developer Backend API description')
    .setVersion('1.0')
    .addTag('register-developer')
    .build();

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Developers API Docs',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, customOptions);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
