import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/tasks';
import { TaskService } from 'src/app/services/task.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {
  id:any; 
  alert: boolean=false;
  task: Task = new Task();
  constructor( private router: ActivatedRoute, private servicetask:TaskService, private location: Location,) {
    console.log(this.router.snapshot.params.id);
    this.id= this.router.snapshot.params.id; 
   }

  ngOnInit(): void {
  }


// createTask(): void {
//   this.servicetask.addTask2(this.task, this.id).subscribe(
//     (response) => {
//       console.log(response); // Replace with your success logic
//     },
//     (error) => {
//       console.log(error); // Replace with your error logic
//     }
//   );
// }
 createTask(): void {

    this.servicetask.addTask2(this.task, this.id).subscribe(
      (response) => {
        console.log("worked"); 
        this.alert=true;
      },
      (error) => {
        console.log(error); // Replace with your error logic
      }
    );
  }
 

  closeAlert()
  {
    this.alert=false;
  }
  goBack(): void {
    this.location.back();
  }
}
