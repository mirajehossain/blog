import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";
import {PostType} from "../types";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private  route: ActivatedRoute, private apiService: ApiService) {
  }

  public Post:PostType = new Object();

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getPost(id)
      .subscribe(
        post =>{
           this.Post = post.data[0];
           console.log(this.Post)
        },
          error=> console.log(error)
      );
  }


}
