import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { UserupdateComponent } from './userupdate/userupdate.component';


@NgModule({
  declarations: [UserComponent, UserupdateComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTooltipModule
  ]
})
export class UsersModule { }
 