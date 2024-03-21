import { ResendDTO } from '@dto/resend.dto';
import { BookDTO } from 'src/dtos/book.dto';

export abstract class BookRepository {
  abstract create(data: BookDTO): Promise<BookDTO>;
  abstract findByBarCode(barcode: string): Promise<BookDTO>;
  abstract findById(id: string): Promise<BookDTO>;
  abstract delete(id: string): Promise<void>;
}

export abstract class BookResendRepository {
  abstract sendEmail(data: ResendDTO): Promise<void>;
}
