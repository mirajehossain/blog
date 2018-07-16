import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent} from "./home.component";
import { sanitizeHtmlPipe} from "../../directives/sanitize-html.pipe";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    sanitizeHtmlPipe
  ],
  exports: [HomeRoutingModule]
})
export class HomeModule { }
