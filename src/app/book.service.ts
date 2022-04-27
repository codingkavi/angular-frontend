import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

   private baseURL = "/api";

   constructor(private httpClient : HttpClient){}




    getBooks(type: String, input: String):Observable<Books[]>{
    return this.httpClient.get<Books[]>(`${this.baseURL + '/' + type + '/' + input}`);
    }


    createBook(input : String, book: Books): Observable<Books>{
    return this.httpClient.post<Books>(`${this.baseURL + '/' + input}`, book);
    }


    updateBook(input : String,book : Books): Observable<Books>{
    return this.httpClient.put<Books>(`${this.baseURL+'/' + input}`, book);
    }
}
