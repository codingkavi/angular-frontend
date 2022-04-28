import { Component, OnInit } from '@angular/core';
import { Books } from '../book';
import { BookService } from  '../book.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id: number;
  book: Books = new Books();
  constructor(private bookService : BookService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getBookById("book" , this.id).subscribe( data => {
    this.book = data;
    console.log(data);
    })
  }

  onSubmit(){

  }

}
