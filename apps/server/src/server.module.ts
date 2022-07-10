import { Module } from '@nestjs/common';
import { ArticleModule } from './module/article/article.module';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  imports: [ArticleModule],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
