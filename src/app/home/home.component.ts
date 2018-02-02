import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Posts=[];
  constructor() {
   this.Posts = [
    {
      id:1,
      title:"Lorem Ipsum Post Title",
      details:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!`,
      author:"Alamin Hossain Miraje",
      date:"January 1, 2018 at 12:00 PM",
      images:["http://placehold.it/750x300"]
    },
    {
      id:2,
      title:"Lorem Ipsum Second Post Title",
      details:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!`,
      author:"Alamin Hossain Miraje",
      date:"January 1, 2018 at 12:00 PM",
      images:["http://placehold.it/750x300"]
    },
    {
        id:3,
        title:"Lorem Ipsum Third Post Title",
        details:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!`,
        author:"Alamin Hossain Miraje",
        date:"January 1, 2018 at 12:00 PM",
        images:["http://placehold.it/750x300"]
      },
    {
        id:4,
        title:"Lorem Ipsum fourth Post Title",
        details:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!`,
        author:"Alamin Hossain Miraje",
        date:"January 1, 2018 at 12:00 PM",
        images:["http://placehold.it/750x300"]
      },
    {
        id:5,
        title:"Lorem Ipsum Fifth Post Title",
        details:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!`,
        author:"Alamin Hossain Miraje",
        date:"January 1, 2018 at 12:00 PM",
        images:["http://placehold.it/750x300"]
      }
  ]
  }

  ngOnInit() {
  }

}
