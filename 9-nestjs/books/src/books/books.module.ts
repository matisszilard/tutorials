import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './books.controller';
import { BookMapper } from './mapper/book.mapper';
import { BookService } from './book.service';
import { Book } from './interface/book';

@Module({
    imports: [
        TypeOrmModule.forFeature([Book])
    ],
    controllers: [BookController],
    providers: [BookService, BookMapper],
})
export class BooksModule { }
