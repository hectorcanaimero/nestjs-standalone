import { Module } from '@nestjs/common';
import { BooksModule } from 'src/entities/books/books.module';

@Module({
  imports: [BooksModule],
})
export class EntitiesModule {}
