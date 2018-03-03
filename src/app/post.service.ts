import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Post } from './post';
import { POSTS } from './dummy-post';

@Injectable()
export class PostService {

  constructor() { }
 /* getPosts(): Observable<Post[]>{
    return of(POSTS)
  }
  */
 getPosts() {
   return POSTS;
 }
}
