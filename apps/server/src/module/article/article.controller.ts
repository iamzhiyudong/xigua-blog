import { Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getHello(): string {
    return this.articleService.getHello();
  }

  @Post()
  addArticle(): string {
    return 'add article success';
  }
}
