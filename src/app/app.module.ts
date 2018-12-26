import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule} from "./layout/layout.module";
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import {HighlightService} from "./highlight.service";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()

  ],
  exports: [AppRoutingModule],
  providers: [ApiService, HighlightService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
