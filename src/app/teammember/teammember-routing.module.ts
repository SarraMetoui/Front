import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeammemberComponent } from './teammember.component';

const routes: Routes = [{ path: '', component: TeammemberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeammemberRoutingModule { }
