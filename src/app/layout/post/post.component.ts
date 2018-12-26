import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {PostType} from "../../types";
import {ApiService} from "../../api.service";
import {ActivatedRoute} from "@angular/router";
import {HighlightService} from "../../highlight.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewChecked  {

  public Post: PostType = new Object();
  highlighted: boolean = false;
  constructor(private  route: ActivatedRoute, private apiService: ApiService, private highlightService: HighlightService) { }


  ngOnInit() {
    this.getPost();
  }

  ngAfterViewChecked() {
    if (this.Post && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
      console.log(this.highlighted)
    }
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
