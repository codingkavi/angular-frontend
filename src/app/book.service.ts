import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

   constructor(private httpClient : HttpClient){}

   /*  private baseURL = "/api";
    getBooks(type: String, input: String) : Observable<Books[]>{
       return this.http.get<Books[]>(`${this.baseURL + '/' + type + '/' + input}`);
       } */

    private baseURL = "/api";
    getBooks(type: String, input: String):Observable<Books[]>{
    return this.httpClient.get<Books[]>(`${this.baseURL + '/' + type + '/' + input}`);
    }

    private baseURL1 = "/api";
    createBook(input : String, book: Books): Observable<Books>{
    return this.httpClient.post<Books>(`${this.baseURL1 + '/' + input}`, book);
    }
}
