import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BooksService) {
  }

  ngOnInit() {
    this.getBookList();
  }

  private getBookList(): void {
    this.bookService.getBooks().subscribe((res: Book[]) => {
      this.books = res;
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
}
