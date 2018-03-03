import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import _{ category } from "./dummy-post";
@Injectable()
export class ApiService {
   url = "dummy.json";

  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get(this.url)
  }

}
