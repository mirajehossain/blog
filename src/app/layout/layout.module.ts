import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {MainModule} from "../main/main.module";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MainModule,
  ],
  declarations: [LayoutComponent,],
  exports: [LayoutRoutingModule,],
})
export class LayoutModule { }
