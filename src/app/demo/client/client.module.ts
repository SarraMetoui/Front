import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';
import { ClientaddComponent } from './clientadd/clientadd.component';
import { ClientupdateComponent } from './clientupdate/clientupdate.component';


@NgModule({
  declarations: [ClientComponent, ClientaddComponent, ClientupdateComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTooltipModule
  ]
})
export class ClientModule { }
