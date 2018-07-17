import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService {

  endpoint = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {
  }

  /**
   * Get All Post from API
   * @returns {Observable<Post[]>}
   */
  getPosts():Observable<any> {
   let url = this.endpoint+"posts";
    return this.http.get<any>(url);
  }


  /**
   * Get Post By ID from API
   * @param {number} id
   * @returns {Observable<Post>}
   */
  getPost(id:number):Observable<any>{
    const url = this.endpoint+'post/'+id;
    return this.http.get<any>(url);

  }


  /**
   * Get Posts by Category
   * @param {number} id
   * @returns {Observable<Post[]>}
   */
  getPostByCategory(id):Observable<any>{
    const url = 'post/find_by_category/'+ id;
    return this.http.get<any>(this.endpoint+url);
  }


  /**
   * Get Categories from API
   * @returns {Observable<Category[]>}
   */
  getCategories():Observable<any>{
    const url = this.endpoint+'category/get_categories';
    return this.http.get<any>(url);
  }


  /**
   * Get About from API
   * @returns {Observable<any>}
   */
  getAbout():Observable<any>{
    const url = this.endpoint+'about/get_about';
    return this.http.get(url);
  }






}
