import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectmanagerComponent } from './projectmanager.component';

const routes: Routes = [{ path: '', component: ProjectmanagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagerRoutingModule { }
