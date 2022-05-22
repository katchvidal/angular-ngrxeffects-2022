import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ListRoutingModule
  ]
})
export class ListModule { }
