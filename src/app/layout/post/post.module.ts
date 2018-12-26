import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from "./post.component";
import {PipeModule} from "../../directives/pipe.module";
import {DisqusModule} from "ngx-disqus";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    PipeModule,
    DisqusModule.forRoot('mirajehossain'),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()

  ],
  declarations: [
    PostComponent,
  ],
  exports: [PostRoutingModule]
})
export class PostModule { }
