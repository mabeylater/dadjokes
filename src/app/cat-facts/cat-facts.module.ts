import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatFactsRoutingModule } from './cat-facts-routing.module';
import { GetCatFactComponent } from './get-cat-fact/get-cat-fact.component';
import { SharedModule } from '../shared/shared.module';
import { ViewCatComponent } from './view-cat/view-cat.component';


@NgModule({
  declarations: [
    GetCatFactComponent,
    ViewCatComponent
  ],
  imports: [
    CommonModule,
    CatFactsRoutingModule,
    SharedModule
  ]
})
export class CatFactsModule { }
