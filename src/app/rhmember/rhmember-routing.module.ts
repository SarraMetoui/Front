import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RhmemberComponent } from './rhmember.component';

const routes: Routes = [{ path: '', component: RhmemberComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhmemberRoutingModule { }
