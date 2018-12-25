import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public search:string="";
  constructor(private apiService: ApiService, public router: Router) { }

  ngOnInit() {
  }

  goSearch(){
    // this.search
    this.apiService.search(this.search)
      .subscribe(success=>{
          console.log(success.data);
          // this.router.navigate(['search'], success.data);
      }, err=>{
        console.log(err)
      })
  }
}
