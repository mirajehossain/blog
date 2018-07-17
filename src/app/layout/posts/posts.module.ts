import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostsComponent} from "./posts.component";
import {PipeModule} from "../../directives/pipe.module";

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    PipeModule
  ],
  declarations: [
    PostsComponent,
  ],
  exports: [PostsRoutingModule]
})
export class PostsModule { }
