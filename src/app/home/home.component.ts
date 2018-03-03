import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";


import { Post } from '../post'
import { PostService } from '../post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Posts : Post[];
  categories:string[];
  constructor(private postService:PostService, private apiService:ApiService) {}

  ngOnInit() {
    this.Posts =  this.postService.getPosts();
    console.log(this.postService.getPosts())

    this.apiService.getCategories()
      .subscribe(data=>{
        console.log(data);
      })

    this.categories = ["C/C++","JavaScript","Angular","NodeJS","Data-Structure","Algorithm"]

  }

}
