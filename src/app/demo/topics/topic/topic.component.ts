import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topics';
import { TopicService } from 'src/app/services/topic.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private service: TopicService) { }
  public topics: Topic[];
  alert: boolean=false;

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

  public remove(promotionId: number): void {
    this.service.deleteTopic(promotionId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTopics();
        this.alert=true;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public search(key: string): void {
    console.log(key);
    const results: Topic[] = [];
    for (const p of this.topics) {
      if (
       p.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(p);
      }
    }
    this.topics = results;
    if (results.length === 0 || !key) {
      this.getTopics();
    }
  }
  closeAlert()
  {
    this.alert=false;
  }

  public onAddPromotion(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.service.addTopic(addForm.value).subscribe(
      (response: Topic) => {
        console.log(response);
        this.getTopics();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
