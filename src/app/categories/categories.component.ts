import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any;
  constructor(private apiService:ApiService) { }


  ngOnInit() {
    this.GetCategories();
  }

  GetCategories():void{

    this.apiService.getCategories()
      .subscribe(cat=>{
        this.categories = cat.data;
        console.log(this.categories)
        }
      );

  }
}
