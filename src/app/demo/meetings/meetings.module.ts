import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingComponent } from './meeting/meeting.component';


@NgModule({
  declarations: [MeetingComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
