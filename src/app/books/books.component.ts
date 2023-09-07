import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books:any = [];

  constructor(private _booksService:BooksService){

    _booksService.getbooks().subscribe(

      (data:any)=>{
        this.books = [data];
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }
}










