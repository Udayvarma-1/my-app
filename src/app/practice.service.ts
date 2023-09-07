import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private _httpClient:HttpClient) { }

  getpractice():Observable<any>{
    return this._httpClient.get("https://api.publicapis.org/entries")
  }

  getfilteredPractice(search:any):Observable<any>{
    return this._httpClient.get("https://api.publicapis.org/entries?filter="+search)
  }

  getSortedPractice(column:any,order:any):Observable<any>{
    return this._httpClient.get("https://api.publicapis.org/entries?sortBy="+column+"&order="+order)
  }



}
