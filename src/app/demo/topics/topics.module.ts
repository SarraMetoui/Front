import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';

import { TopicsRoutingModule } from './topics-routing.module';
import { TopicComponent } from './topic/topic.component';


@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    SharedModule
  ]
})
export class TopicsModule { }
