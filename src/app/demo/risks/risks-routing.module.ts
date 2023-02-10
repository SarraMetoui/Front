import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RisksComponent } from './risks/risks.component';


const routes: Routes = [
  {
    path: '',
    component: RisksComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisksRoutingModule { }
