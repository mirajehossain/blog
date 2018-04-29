import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private  route: ActivatedRoute, private apiService: ApiService) {
  this.getPost();

  }
  post:Object = {
    id:'',
    title:'',
    description:'',
    author:'',
    date:'',
    picture:''

  };

  Post:Object = new Object(this.post);

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
