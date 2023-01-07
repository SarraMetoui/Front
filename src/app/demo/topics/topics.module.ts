import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicComponent } from './topic/topic.component';
import { TopicaddComponent } from './topicadd/topicadd.component';


@NgModule({
  declarations: [TopicComponent, TopicaddComponent],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTooltipModule
  ]
})
export class TopicsModule { }
