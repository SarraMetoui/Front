import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskssRoutingModule } from './taskss-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { UpdatetasksComponent } from './updatetasks/updatetasks.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';


@NgModule({
  declarations: [TasksComponent, AddtasksComponent, UpdatetasksComponent, TaskdetailsComponent],
  imports: [
    CommonModule,
    TaskssRoutingModule
  ]
})
export class TaskssModule { }
