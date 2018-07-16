import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from "./post.component";
import {sanitizeHtmlPipe} from "../../directives/sanitize-html.pipe";

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,

  ],
  declarations: [
    PostComponent,
    // sanitizeHtmlPipe
  ],
  exports: [PostRoutingModule]
})
export class PostModule { }
