import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from 'src/app/services/topic.service';
import { NgForm } from '@angular/forms';
import { Topic } from 'src/app/models/topics';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.scss']
})
export class AddtasksComponent implements OnInit {
 
  constructor(private location: Location, private service: TopicService, private router: ActivatedRoute) { }
  data:any;
  id:any; 
  public topic: Topic[];

  ngOnInit(): void {
    console.log('hi');

    console.log(this.router.snapshot.params.id);
    this.id= this.router.snapshot.params.id; 
    this.getDetails();
  }
  getDetails()
  { 
   this.service.getProjectTopics(this.id).subscribe(data=>
    {  
        this.data=data[0];
        console.log(this.data)
    }
   )
  }
  public remove(Id: number): void {
    this.service.deleteTopic(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getDetails();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPromotion(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    // const projectId = this.route.snapshot.paramMap.get('id');
    this.service.addTopic2(addForm.value,this.id).subscribe(
      (response: Topic) => {
        console.log(response);
        this.getDetails();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
  
  
}
