import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
      { path: 'search/:str', loadChildren: './search/search.module#SearchModule' },
      { path: 'post/:id', loadChildren: './post/post.module#PostModule'},
      { path: 'about', loadChildren: './about/about.module#AboutModule'},
      { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
      { path: 'category/:id', loadChildren: './posts/posts.module#PostsModule'},
      { path: '**', redirectTo: 'home'}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
