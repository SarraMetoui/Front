import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagerRoutingModule } from './projectmanager-routing.module';
import { ProjectmanagerComponent } from './projectmanager.component';


@NgModule({
  declarations: [ProjectmanagerComponent],
  imports: [
    CommonModule,
    ProjectmanagerRoutingModule
  ]
})
export class ProjectmanagerModule { }
