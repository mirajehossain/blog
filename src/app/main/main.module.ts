import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {HeaderComponent} from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoriesComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoriesComponent
  ]
})
export class MainModule { }
