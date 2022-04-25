import { Component, OnInit } from '@angular/core';
import { Books } from '../book';


@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {

   book: Books = new Books();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  console.log(this.book);
  }

}
