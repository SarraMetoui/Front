import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topics';
import { TopicService } from 'src/app/services/topic.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private service: TopicService) { }
  public topics: Topic[];

  ngOnInit(): void {
    this.getTopics();
  }


  public getTopics(): void {
    this.service.getTopics().subscribe(
      (response: Topic[]) => {
        this.topics = response;
        console.log(this.topics);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
