import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Post, Category } from './post';
import { POSTS } from "./dummy-post";


@Injectable()
export class ApiService {

  endpoint = 'http://localhost:3000/api/';
  // url = 'http://localhost:3000/api/posts';
  url = "dummy.json";
  constructor(private http: HttpClient) {
  }

  /**
   * Get All Post from API
   * @returns {Observable<Post[]>}
   */
  getPosts():Observable<Post[]> {
   let url = "posts";
    // return this.http.get<Post[]>(this.endpoint+url);
    return this.http.get<Post[]>(this.url);
  }


  /**
   * Get Post By ID from API
   * @param {number} id
   * @returns {Observable<Post>}
   */
  getPost(id:number):Observable<Post>{
    const url = 'post/:'+id;
    // return  this.http.get<Post>(this.endpoint+url);
    return of(POSTS.find(post=>post.id === id))
  }


  /**
   * Get Posts by Category
   * @param {number} id
   * @returns {Observable<Post[]>}
   */
  getPostByCategory(id:number):Observable<Post[]>{
    const url = 'post/find_by_category/:'+id;
    return this.http.get<Post[]>(this.endpoint+url);
  }


  /**
   * Get Categories from API
   * @returns {Observable<Category[]>}
   */
  getCategories():Observable<Category[]>{
    const url = 'category/get_categories';
    return this.http.get<Category[]>(this.endpoint+url);
  }


  /**
   * Get About from API
   * @returns {Observable<any>}
   */
  getAbout():Observable<any>{
    const url = 'about/get_about';
    return this.http.get(this.endpoint+this.url);
  }






}
