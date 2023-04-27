import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskssRoutingModule } from './taskss-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { UpdatetasksComponent } from './updatetasks/updatetasks.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbAccordionModule, NgbCollapseModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { DisplaytasksComponent } from './displaytasks/displaytasks.component';
import { EdittopicComponent } from './edittopic/edittopic.component';
import { IssuetrackComponent } from './issuetrack/issuetrack.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserupdateComponent } from './userupdate/userupdate.component';

@NgModule({
  declarations: [TasksComponent, AddtasksComponent, UpdatetasksComponent, TaskdetailsComponent, DisplaytasksComponent, EdittopicComponent, IssuetrackComponent, UserdetailsComponent, UserupdateComponent],
  imports: [
    CommonModule,
    TaskssRoutingModule,
    SharedModule,
    NgbTabsetModule  ,
    NgbCollapseModule,
    NgbAccordionModule
  ]
})
export class TaskssModule { }
