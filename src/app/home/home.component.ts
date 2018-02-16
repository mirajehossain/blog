import { Component, OnInit } from '@angular/core';



import { Post } from '../post'
import { PostService } from '../post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Posts : Post[];
  constructor(private postService:PostService) {}

  ngOnInit() {
    this.Posts =  this.postService.getPosts();
    console.log(this.postService.getPosts())
  }

}
