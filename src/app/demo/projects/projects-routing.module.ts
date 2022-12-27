import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  
  },
  {
    path: 'editproject/:id',
    component: ProjectupdateComponent
  },
  {
    path: 'detailsproject/:id',
    component: ProjectdetailsComponent
  },
  {
    path: 'addproject',
    component: AddprojectComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
