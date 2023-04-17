import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TasksComponent } from './tasks/tasks.component';
import { UpdatetasksComponent } from './updatetasks/updatetasks.component';
import { DisplaytasksComponent } from './displaytasks/displaytasks.component';
import { EdittopicComponent } from './edittopic/edittopic.component';


const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  
  },
  {
    path: 'edittask/:id',
    component: UpdatetasksComponent
  },

{
  path: 'detailstask/:id',
  component: TaskdetailsComponent
},
{
  path: 'addtask/:id',
  component: AddtasksComponent
},
{
  path: 'display',
  component: DisplaytasksComponent
},
{
  path: 'edittopic/:id',
  component: EdittopicComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskssRoutingModule { }
