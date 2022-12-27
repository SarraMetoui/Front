import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { AddprojectComponent } from './addproject/addproject.component';

@NgModule({
  declarations: [ProjectComponent, ProjectupdateComponent, ProjectdetailsComponent, AddprojectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTooltipModule
  ]
})
export class ProjectsModule { }
