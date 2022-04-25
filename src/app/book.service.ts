import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

   constructor(private http : HttpClient){}

   /*  private baseURL = "/api";
    getBooks(type: String, input: String) : Observable<Books[]>{
       return this.http.get<Books[]>(`${this.baseURL + '/' + type + '/' + input}`);
       } */

    private baseURL = "/api";
    getBooks(type: String, input: String):Observable<Books[]>{
    return this.http.get<Books[]>(`${this.baseURL + '/' + type + '/' + input}`);
    }
}
