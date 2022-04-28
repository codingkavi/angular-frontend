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


    getBookById(input: String , id: number) : Observable<Books>{
    console.log(this.baseURL);
      return this.httpClient.get<Books>(`${this.baseURL + '/' + input + '/' + id}`);
      }


     getBooks(type: String, input: String):Observable<Books[]>{
      return this.httpClient.get<Books[]>(`${this.baseURL + '/' + type + '/' + input}`);
      }


    createBook(input: String, book: Books): Observable<Books>{
      return this.httpClient.post<Books>(`${this.baseURL + '/' + input}`, book);
      }

    deleteBookById(input: String, id: number): Observable<Books>{
      return this.httpClient.delete<Books>(`${this.baseURL + '/' + input + '/' + id}`);
    }


    /* updateBook(input : String,book : Books): Observable<Books>{
      return this.httpClient.put<Books>(`${this.baseURL+'/' + input}`, book);
      } */
}
