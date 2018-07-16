import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';




const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule'},
  // { path: 'about', layout: AboutComponent },
  // { path: 'contact', layout: ContactComponent },
  // { path: 'categories', layout: CategoriesComponent },
  // { path: 'category/:id', layout: PostsComponent },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
