import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisksRoutingModule } from './risks-routing.module';
import { RisksComponent } from './risks/risks.component';
import { DetailriskComponent } from './detailrisk/detailrisk.component';


@NgModule({
  declarations: [RisksComponent, DetailriskComponent],
  imports: [
    CommonModule,
    RisksRoutingModule
  ]
})
export class RisksModule { }
