import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [DashboardComponent, HeaderFooterComponent, FooterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
