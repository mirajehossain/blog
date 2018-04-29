import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {PostType} from "../types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Posts: PostType;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getPost();
  }

  getPost(){

    this.apiService.getPosts()
      .subscribe(post => {
        this.Posts = post.data;
      },
        error=>console.log(error)
      );
  }

}
