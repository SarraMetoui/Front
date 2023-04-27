import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TasksComponent } from './tasks/tasks.component';
import { UpdatetasksComponent } from './updatetasks/updatetasks.component';
import { DisplaytasksComponent } from './displaytasks/displaytasks.component';
import { EdittopicComponent } from './edittopic/edittopic.component';
import { IssuetrackComponent } from './issuetrack/issuetrack.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserupdateComponent } from './userupdate/userupdate.component';


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
},
{
  path: 'track',
  component: IssuetrackComponent
},
{
  path: 'employee/:id',
  component: UserdetailsComponent
},

{
  path: 'edituser/:id',
  component: UserupdateComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskssRoutingModule { }
