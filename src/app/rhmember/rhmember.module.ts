import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhmemberRoutingModule } from './rhmember-routing.module';
import { RhmemberComponent } from './rhmember.component';


@NgModule({
  declarations: [RhmemberComponent],
  imports: [
    CommonModule,
    RhmemberRoutingModule
  ]
})
export class RhmemberModule { }
