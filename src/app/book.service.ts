import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

   private baseURL = "/api";
    constructor(private http : HttpClient){}
    getBooks(type: String, input: String) : Observable<Books[]>{
       return this.http.get<Books[]>(`${this.baseURL + '/' + type + '/' + input}`);
    }
}
