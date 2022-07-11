import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/article.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll(): string {
    return this.articleService.getHello();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} article`;
  }

  @Post()
  create(@Body() createArticleDto: CreateArticleDto): string {
    console.log(createArticleDto);
    return 'add article success';
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} article`;
  }

  @Delete(':id')
  delete(@Param(':id') id: string) {
    return `This action removes a #${id} article`;
  }
}
