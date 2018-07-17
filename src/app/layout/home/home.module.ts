import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent} from "./home.component";
import {PipeModule} from "../../directives/pipe.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipeModule
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [HomeRoutingModule]
})
export class HomeModule { }
