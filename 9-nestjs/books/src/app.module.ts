import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { LoggerMiddleware } from 'common/middleware/logger.middleware';
import { BookController } from './books/books.controller';
import { Book } from './books/interface/book';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'books',
    entities: [Book],
    synchronize: true, // For development, set to false for production
  }),],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(BookController)
  }
}
