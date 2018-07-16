import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostsComponent} from "./posts.component";
import {sanitizeHtmlPipe} from "../../directives/sanitize-html.pipe";

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  declarations: [
    PostsComponent,
    // sanitizeHtmlPipe
  ],
  // exports: [sanitizeHtmlPipe]
  exports: [PostsRoutingModule]
})
export class PostsModule { }
