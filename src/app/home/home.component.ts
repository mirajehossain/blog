import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Posts: any;
  constructor(private postService: PostService, private apiService: ApiService) {}

  ngOnInit() {
    this.Posts =  this.postService.getPosts();
    console.log(this.Posts)
    // console.log(this.postService.getPosts());
    // this.apiService.getPosts()
    //   .subscribe(data => {
    //     this.Posts = data.data;
    //   });


  }

}
