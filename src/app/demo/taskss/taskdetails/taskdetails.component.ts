import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent implements OnInit {

  constructor(private service: TaskService, private router: ActivatedRoute) { }
  data:any;
  id:any; 
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
}
