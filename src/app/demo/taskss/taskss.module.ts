import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskssRoutingModule } from './taskss-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { UpdatetasksComponent } from './updatetasks/updatetasks.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { DisplaytasksComponent } from './displaytasks/displaytasks.component';

@NgModule({
  declarations: [TasksComponent, AddtasksComponent, UpdatetasksComponent, TaskdetailsComponent, DisplaytasksComponent],
  imports: [
    CommonModule,
    TaskssRoutingModule,
    SharedModule,
    NgbTabsetModule
  ]
})
export class TaskssModule { }
