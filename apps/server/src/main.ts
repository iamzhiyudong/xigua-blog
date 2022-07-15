import { NestFactory } from '@nestjs/core';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);

  // 自定义拦截器 - 响应数据转换
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3003);
}
bootstrap();
