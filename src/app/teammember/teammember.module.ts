import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeammemberRoutingModule } from './teammember-routing.module';
import { TeammemberComponent } from './teammember.component';


@NgModule({
  declarations: [TeammemberComponent],
  imports: [
    CommonModule,
    TeammemberRoutingModule
  ]
})
export class TeammemberModule { }
