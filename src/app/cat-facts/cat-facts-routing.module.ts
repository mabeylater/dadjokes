import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCatFactComponent } from './get-cat-fact/get-cat-fact.component';
import { ViewCatComponent } from './view-cat/view-cat.component';

const routes: Routes = [
  {
    path: '',
    component: GetCatFactComponent
  },
  {
    path:'view',
    component: ViewCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatFactsRoutingModule { }
