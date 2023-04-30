import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [

  {
    path: '',
    component: UserComponent,
  
  },
  {
    path: 'edituser/:id',
    component: UserupdateComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
