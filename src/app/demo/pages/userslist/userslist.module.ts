import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserslistRoutingModule } from './userslist-routing.module';
import { UserspageComponent } from './userspage/userspage.component';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [UserspageComponent],
  imports: [
    CommonModule,
    UserslistRoutingModule,
    SharedModule
  ]
})
export class UserslistModule { }
