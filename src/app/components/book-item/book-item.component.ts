import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book;
  viewBookDetails: Book;
  @ViewChild('displayBook') displayBook!: ElementRef;
  constructor(private service: BooksService, private router: Router) {
  }

  change_book(f, id) {
    if (f.value) {
      this.service.changeBook(f.value, id).subscribe((result: { success }) => {
        if (result.success) {
          this.router.navigate(['/tabs/tab1']);
        } else {
          console.log("error ");
        }
      });
    } else {
      alert("Enter a valid Email Address");
    }
  }

  ngOnInit() {
  }

  showDetails(book: Book) {
    this.viewBookDetails = {...book};
    this.displayBook.nativeElement.style.display = "block";
  }

  closeDialog() {
    this.displayBook.nativeElement.style.display = "none"
  }

}
