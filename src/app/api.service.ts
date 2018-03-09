import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { POSTS } from './dummy-post';

@Injectable()
export class ApiService {
  // url = 'http://localhost:3000/api/posts';
  url = "dummy.json";
  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.url);
  }

}
