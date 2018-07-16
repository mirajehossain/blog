import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {AboutComponent} from "./about.component";
import {sanitizeHtmlPipe} from "../../directives/sanitize-html.pipe";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent,
    // sanitizeHtmlPipe
  ],
  exports: [AboutRoutingModule]
})
export class AboutModule { }
