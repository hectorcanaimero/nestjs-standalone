import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookRepository } from '@repository/book.repository';
import { BookPrimaRepository } from '@provider/prisma/repositories/book.prisma';

@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    { provide: BookRepository, useClass: BookPrimaRepository },
  ],
})
export class BooksModule {}
