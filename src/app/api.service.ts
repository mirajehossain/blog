import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  url = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.url);
  }

}
