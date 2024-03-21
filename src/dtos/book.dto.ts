import { IsNotEmpty, IsString } from 'class-validator';

export class BookDTO {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  description: string;
  @IsString()
  @IsNotEmpty()
  bar_code: string;
}
