import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { BookService} from '../book.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})

export class CreateBooksComponent implements OnInit {

   book: Books = new Books();
   constructor(private bookService: BookService ,
    private router : Router) { }

   ngOnInit(): void {}

  private saveBook(){
      this.bookService.createBook("book",this.book).subscribe(data => {
      console.log(data);
      this.goToBookList();

      })
      }

    goToBookList(){
      this.router.navigate(['/books']);
    }

  onSubmit(){
      console.log(this.book);
      this.saveBook();
  }
}
