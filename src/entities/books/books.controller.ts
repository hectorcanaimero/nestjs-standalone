import { Controller, Body, Post, Delete, Param } from '@nestjs/common';
import { BookDTO } from '@dto/book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  async create(@Body() data: BookDTO): Promise<BookDTO> {
    return this.bookService.create(data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.bookService.delete(id);
  }
}
