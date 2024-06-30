import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './interface/book';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private booksRepository: Repository<Book>,
    ) { }

    async create(book: Book): Promise<Book> {
        return this.booksRepository.save(book);
    }

    // TODO BookDto is used as demonstration
    async update(id: number, book: BookDto): Promise<Book> {
        console.log(book);
        await this.booksRepository.update(id, book);
        return this.booksRepository.findOne({ where: { id } });
    }

    async findAll(): Promise<Book[]> {
        return this.booksRepository.find();
    }

    async findOne(id: number): Promise<Book> {
        return this.booksRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.booksRepository.delete(id);
    }
}
