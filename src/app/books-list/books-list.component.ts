import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { BookService } from '../book.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {

  books : Books[];

  constructor(private bookService : BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
    /* private callMethod() {
    this.bookService.getBooks("author", "Kathryn")
    .subscribe(data =>  {
        this.books = data;
        console.log(data);
    }); */

    private getAllBooks(){
      this.bookService.getBooks("book" , "all")
      .subscribe(data => {
        this.books = data;
        console.log(data);
    });
    }

    updateBook(id: number){
      this.router.navigate(['update-book',id]);

    }



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


