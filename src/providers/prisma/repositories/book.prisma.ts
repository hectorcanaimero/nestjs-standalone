import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/dtos/book.dto';
import { PrismaService } from '../prisma.service';
import { BookRepository } from '../../../repositories/book.repository';

@Injectable()
export class BookPrimaRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: BookDTO): Promise<BookDTO> {
    const insert = await this.prisma.book.create({
      data: {
        id: randomUUID(),
        title: data.title,
        description: data.description,
        bar_code: data.bar_code,
      },
    });
    return insert;
  }

  async findByBarCode(barcode: string): Promise<BookDTO> {
    return this.prisma.book.findFirst({
      where: { bar_code: barcode },
    });
  }
  async findById(id: string): Promise<BookDTO> {
    return this.prisma.book.findFirst({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.book.delete({ where: { id } });
  }
}
