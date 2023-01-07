import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopicaddComponent } from './topicadd/topicadd.component';


const routes: Routes = [
  {
    path: '',
    component: TopicComponent,
  
  },
  {
    path: 'add',
    component: TopicaddComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
