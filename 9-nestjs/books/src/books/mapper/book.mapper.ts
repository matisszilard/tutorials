import { Injectable } from "@nestjs/common";
import { BookDto } from "../dto/book.dto";
import { Book } from "../interface/book";

@Injectable()
export class BookMapper {

    mapToBook(bookDto: BookDto): Book {
        const book: Book = {
            id: null,
            title: bookDto.title,
            author: bookDto.author,
            year: bookDto.year,
        }
        return book
    }


    mapToBookDto(book: Book): BookDto {
        const bookDto: BookDto = {
            title: book.title,
            author: book.author,
            year: book.year,
        }
        return bookDto
    }
}
