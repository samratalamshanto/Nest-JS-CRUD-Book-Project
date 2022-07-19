import { Injectable } from '@nestjs/common';
import { Book } from './data/data.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    this.books.push(book);
    return 'Book Added.';
  }

  //delete
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id != bookId;
    });

    return 'Book Deleted';
  }
  //update
  updateBookService(book: Book): string {
    const index = this.books.findIndex((curBook) => {
      return book.id == curBook.id;
    });

    this.books[index] = book;
    return 'Book has been updated.';
  }

  //findall
  findallBookService(): Book[] {
    return this.books;
  }
}
