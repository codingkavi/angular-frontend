import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateBooksComponent} from './create-books/create-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [

  { path: 'books', component: BooksListComponent},
  { path: 'create-books', component: CreateBooksComponent},
  { path: 'update-book/:id' , component: UpdateBookComponent },
  { path: '' , redirectTo: 'books' ,pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
