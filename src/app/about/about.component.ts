import { Component, OnInit } from '@angular/core';
import {AuthorType} from "../types";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    Author:AuthorType;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getAbout()
  }

  getAbout(){
    this.apiService.getAbout()
      .subscribe(success=> {
        console.log(success);
        this.Author = success.data[0]
      },
        error=> error
      )
  }

}
