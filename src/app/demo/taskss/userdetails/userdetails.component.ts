import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/tasks';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private servicetask:TaskService, private location: Location,  private service: UsersServiceService, private router: ActivatedRoute) { }
  data:any;
  id:any; 
  public users: User[];
  task: Task = new Task();
  selectedEmployeeId: number;

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.id= this.router.snapshot.params.id; 
    // this.route.params.subscribe(params => {
    //   const uid = +params['uid'];
    //   console.log(uid); // prints the employee id to the console
    // });
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
  
  goBack(): void {
    this.location.back();
  }
  public remove(Id: number): void {
    this.servicetask.deleteTask(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getDetails();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  // public onAddPromotion(addForm: NgForm): void {
  //   document.getElementById('add-employee-form').click();
  //   // const projectId = this.route.snapshot.paramMap.get('id');
  //   this.servicetask.addTask2(addForm.value,this.id).subscribe(
  //     (response: Task) => {
  //       console.log(response);
  //       this.getDetails();
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     }
  //   );
  // }
  // createTask(): void {
  //   this.task.uid = this.selectedEmployeeId;

  //   this.servicetask.addTask2(this.task, this.selectedEmployeeId).subscribe(
  //     (response) => {
  //       this.getDetails();
  //       console.log(response); // Replace with your success logic
  //     },
  //     (error) => {
  //       console.log(error); // Replace with your error logic
  //     }
  //   );
  // }
  
}
