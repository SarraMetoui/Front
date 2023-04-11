import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailriskComponent } from './detailrisk/detailrisk.component';
import { RisksComponent } from './risks/risks.component';


const routes: Routes = [
  {
    path: '',
    component: RisksComponent,
  
  },
  {
    path: 'details/:id',
    component: DetailriskComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisksRoutingModule { }
