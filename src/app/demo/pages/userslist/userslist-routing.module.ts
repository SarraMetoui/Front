import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserspageComponent } from './userspage/userspage.component';


const routes: Routes = [
  {
    path: '',
    component: UserspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserslistRoutingModule { }
