import { Component, OnInit } from '@angular/core';
import { Books } from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books : Books[];

  constructor() { }

  ngOnInit(): void {

  this.books = [{

    "author" : "J.K.Rowling",
    "title" : "Deathly Hallows"

    },
    {
    "author" : "Ursula",
    "title" : "Amelia Bedelia"
    }];
  }

}
