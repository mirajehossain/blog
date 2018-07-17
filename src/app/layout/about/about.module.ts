import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import {AboutComponent} from "./about.component";
import {PipeModule} from "../../directives/pipe.module";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    PipeModule
  ],
  declarations: [
    AboutComponent,
  ],
  exports: [AboutRoutingModule]
})
export class AboutModule { }
