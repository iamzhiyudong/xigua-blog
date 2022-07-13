import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './module/article/article.module';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'xigua_blog',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ArticleModule,
  ],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
