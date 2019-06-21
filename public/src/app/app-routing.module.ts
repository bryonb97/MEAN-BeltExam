import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  //example
  {path: 'pets', component: HomeComponent},
  {path: 'pets/new', component: NewComponent},
  {path: 'pets/edit/:id', component: EditComponent},
  {path: 'pets/:id', component: DetailComponent},
  {path: '**', component: PageNotFoundComponent},
] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
