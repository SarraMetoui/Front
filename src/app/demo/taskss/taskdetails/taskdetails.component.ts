import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/tasks';
import { Location } from '@angular/common';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent implements OnInit {

  constructor(private location: Location, private service: TaskService, private router: ActivatedRoute) { }
  data:any;
  id:any; 
  public task: Task[];

  ngOnInit(): void {
  
    console.log(this.router.snapshot.params.id);
    this.id= this.router.snapshot.params.id; 
    this.getDetails();
  }


  getDetails()
  { 
   this.service.getProjectTasks(this.id).subscribe(data=>
    {  
        this.data=data[0];
        console.log(this.data)
    }
   )
  }

  public remove(Id: number): void {
    this.service.deleteTask(Id).subscribe(
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
    this.service.addTask(addForm.value,this.id).subscribe(
      (response: Task) => {
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
