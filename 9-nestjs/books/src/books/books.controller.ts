import { Controller, Post, Put, Get, Delete, Param, Body, HttpStatus, HttpException } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { BookService } from './book.service'
import { BookMapper } from './mapper/book.mapper';
import { Book } from './interface/book';

@Controller('api/v1/books')
export class BookController {
    constructor(private bookService: BookService, private bookMapper: BookMapper) { }

    @Post()
    async create(@Body() bookDto: BookDto): Promise<BookDto> {
        console.log(bookDto);
        return this.bookService.create(this.bookMapper.mapToBook(bookDto));
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() bookDto: BookDto): Promise<BookDto> {
        const book = await this.bookService.update(+id, bookDto);
        return this.bookMapper.mapToBookDto(book);
    }

    @Get()
    async getBooks(): Promise<any[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    async findBook(@Param('id') id: string): Promise<BookDto> {
        const book = await this.bookService.findOne(+id);
        return this.bookMapper.mapToBookDto(book);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.bookService.remove(id);
    }
}
