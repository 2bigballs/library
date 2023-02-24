import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBook} from "../models/book";
import {IBookForm} from "../models/bookForm";
import {convertObjectToFromData} from "./helpers/httpClient.helper";
import {updateBook} from "../store/book/book.actions";
import {IViewBook} from "../models/view-book";

export const baseUrl = "https://localhost:5000/"
@Injectable({
  providedIn: 'root'
})
export class BookService{


  private bookUrl = baseUrl+"api/books";

  constructor(private httpClient: HttpClient) {

  }


  public get() {
    return this.httpClient.get<IBook[]>(this.bookUrl);
  }

  public getRecommended() {
    const recommendedUrl = this.bookUrl + "/recommended";
    return this.httpClient.get<IBook[]>(recommendedUrl);
  }

  public getBooks(filter: string) {
    if (filter === "Recommended") {
      return this.getRecommended();
    }
    return this.get();
  }

  public createBook(book:Partial<IBookForm>)
  {
    let formData = new FormData();
    formData.append('cover', book.cover!, book.cover?.name);
    formData = convertObjectToFromData(book, formData);
    return this.httpClient.post(this.bookUrl,formData);
  }

  public updateBook(book: Partial<IBookForm>)
  {
    let formData = new FormData();
    formData.append('cover', book.cover!, book.cover?.name);
    formData = convertObjectToFromData(book, formData);
    return this.httpClient.put(this.bookUrl,formData);
  }

  public getViewBook(bookId:number)
  {
    return this.httpClient.get<IViewBook>(this.bookUrl+"/"+bookId);
  }
}


