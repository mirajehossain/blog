import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';



import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import {sanitizeHtmlPipe} from "./directives/sanitize-html.pipe";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule
  ],
  exports: [ AppRoutingModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
