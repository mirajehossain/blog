import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {MainModule} from "../main/main.module";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {PostsModule} from "./posts/posts.module";
import {PostModule} from "./post/post.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MainModule,
    // AboutModule,
    // HomeModule,
    // PostsModule,
    // PostModule,
  ],
  declarations: [LayoutComponent,],
  exports: [LayoutRoutingModule,],
})
export class LayoutModule { }
