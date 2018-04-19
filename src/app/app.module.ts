import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { sanitizeHtmlPipe } from './directives/sanitize-html.pipe';


import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CategoriesComponent,
    sanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ AppRoutingModule,sanitizeHtmlPipe                                                                                              ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
