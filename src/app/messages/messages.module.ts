import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,

  ]
})
export class MessagesModule { }
