import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books : Books[];


  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.callMethod();
  }
    private callMethod() {
    this.bookService.getBooks()
    .subscribe(data =>  {
        this.books = data;
        console.log(data);
    });

   /* this.books = [{

    "author" : "J.K.Rowling",
    "title" : "Deathly Hallows"
    },
    {
    "author" : "Ursula",
    "title" : "Amelia Bedelia"
    }];
  } */

  }

}
