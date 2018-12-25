import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api.service";
import {PostType} from "../../types";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Posts: PostType;
  constructor(private  route: ActivatedRoute, private apiService: ApiService) {}

  public startAt:any = 0;
  public endAt:any;
  public totalPage:any;
  public currentPage:number= 1;
  ngOnInit() {
    this.getPost();
  }

  getPost(){
    const str = this.route.snapshot.paramMap.get('str');
    this.apiService.search(str)
      .subscribe(post => {
          console.log(post);
          this.Posts = post.data;
          let len = post.data.length;
          this.startAt = 0;
          this.currentPage = 1;
          this.totalPage = Math.ceil(len/10);
          this.endAt = this.currentPage * 10;


        },
        error=>console.log(error)
      );

  }

  previous(){
      this.currentPage++;
      this.startAt += 10 ;
      this.endAt = this.currentPage * 10;
    // window.scroll(0,0);

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
  next(){
    if(this.currentPage <=this.totalPage){
      this.currentPage--;
      this.startAt -= 10 ;
      this.endAt = this.currentPage - 10;
      // window.scroll(0,0);

      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    } else {
      this.currentPage--;
      this.startAt -= 10 ;
      this.endAt = this.currentPage - 10;


      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }

  }


}
