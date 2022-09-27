import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthentificationComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
