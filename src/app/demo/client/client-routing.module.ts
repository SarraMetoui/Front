import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientupdateComponent } from './clientupdate/clientupdate.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  },
  {
    path: 'edit/:id',
    component:ClientupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
