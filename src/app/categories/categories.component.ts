import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Category } from "../post";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category[] = [
    {
      id:1,
      title:'C/C++'
    }, {
      id:2,
      title:'JavaScript'
    }, {
      id:3,
      title:'Angular'
    }, {
      id:4,
      title:'NodeJS'
    }, {
      id:5,
      title:'DataStructure'
    }, {
      id:6,
      title:'Algorithm'
    }];
  constructor(private apiService:ApiService) { }


  ngOnInit() {
    this.GetCategories();
  }

  GetCategories():void{

    this.apiService.getCategories()
      .subscribe(category=>this.categories = category);

  }
}
