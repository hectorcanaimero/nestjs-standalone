import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BookDTO } from '@dto/book.dto';
import { BookRepository } from '@repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}
  async create(data: BookDTO): Promise<any> {
    const bookExists: BookDTO = await this.bookRepository.findByBarCode(
      data.bar_code,
    );
    if (bookExists) {
      throw new HttpException('Already book exist', HttpStatus.BAD_REQUEST);
    }
    const create: BookDTO = await this.bookRepository.create(data);
    return create;
  }

  async delete(id: string): Promise<void> {
    const bookExists: BookDTO = await this.bookRepository.findById(id);
    if (!bookExists) {
      throw new HttpException('The book not exist!', HttpStatus.BAD_REQUEST);
    }
    await this.bookRepository.delete(id);
  }
}
