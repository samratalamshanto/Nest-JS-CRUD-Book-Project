import { Module } from '@nestjs/common';
import { BookModule } from './BOOK/book.modules';


@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
