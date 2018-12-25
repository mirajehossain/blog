import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from "./search.component";
import {PipeModule} from "../../directives/pipe.module";

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    PipeModule
  ],
  declarations: [
    SearchComponent,
  ],
  exports: [SearchRoutingModule]
})
export class SearchModule { }
