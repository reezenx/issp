import { Inject, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { CustomPrismaService } from 'nestjs-prisma';
import { DATA } from '@issp/shared/constant';
import { PrismaClient } from '@issp/prisma/main';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject(DATA.DB.PRISMA_SERVICE_MAIN)
    private prisma: CustomPrismaService<PrismaClient>
  ) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.client.article.create({ data: createArticleDto });
  }

  findAll() {
    return this.prisma.client.article.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this.prisma.client.article.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  findDrafts() {
    return this.prisma.client.article.findMany({ where: { published: false } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.client.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.client.article.delete({ where: { id } });
  }
}
