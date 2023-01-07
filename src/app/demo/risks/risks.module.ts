import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisksRoutingModule } from './risks-routing.module';
import { RisksComponent } from './risks/risks.component';


@NgModule({
  declarations: [RisksComponent],
  imports: [
    CommonModule,
    RisksRoutingModule
  ]
})
export class RisksModule { }
