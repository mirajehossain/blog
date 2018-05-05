import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {PostType} from "../types";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
Posts:PostType[];
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getPostByCategory(id)
      .subscribe(post => {
          this.Posts = post.data;
          console.log(post)
        },
        error=>console.log(error)
      );
  }
}
