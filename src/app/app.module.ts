import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateBooksComponent } from './create-books/create-books.component';



@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    UserListComponent,
    CreateBooksComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
