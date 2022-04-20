import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

   private baseURL = "http://localhost:8080/bookid/101";
    constructor(private http : HttpClient){}
    getBooks() : Observable<Books[]>{
          return this.http.get<Books[]>(`${this.baseURL}`);
    }
}

