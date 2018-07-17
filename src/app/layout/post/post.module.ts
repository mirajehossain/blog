import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from "./post.component";
import {PipeModule} from "../../directives/pipe.module";

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    PipeModule

  ],
  declarations: [
    PostComponent,
  ],
  exports: [PostRoutingModule]
})
export class PostModule { }
