import { Module } from "@nestjs/common";
import { BookController } from "./book.Controller";
import { BookService } from "./book.Services";

@Module({
    imports:[],
    controllers:[BookController],
    providers:[BookService],

})

export class BookModule{}