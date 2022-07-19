import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.Services';
import { Book } from './data/data.dto';

@Controller('book')
export class BookController {
  constructor(private bookservice: BookService) {}

  @Post('/add')
  addBooks(@Body() book: Book): string {
    return this.bookservice.addBookService(book);
  }

  @Get('/findall')
  findallBooks(): Book[] {
    return this.bookservice.findallBookService();
  }

  @Put('/update')
  updateBooks(@Body() book: Book): string {
    return this.bookservice.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): string {
    return this.bookservice.deleteBookService(bookId);
  }
}
