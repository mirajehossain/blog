import { Component, OnInit } from '@angular/core';
import {PostType} from "../../types";
import {ApiService} from "../../api.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  Posts:PostType[];
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(e=>{
      if ( e instanceof NavigationEnd){
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.getPost(id);
      }
    });


    const id = this.route.snapshot.paramMap.get('id');
    this.getPost(id);
  }

  getPost(id){
    this.apiService.getPostByCategory(id)
      .subscribe(post => {
          this.Posts = post.data;
          console.log(post)
        },
        error=>console.log(error)
      );
  }

}
