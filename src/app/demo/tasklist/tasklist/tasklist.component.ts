import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/tasks';
import { Topic } from 'src/app/models/topics';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  constructor(private service: TaskService) { }
  public tasks: Task[];

  ngOnInit(): void {
    this.getTasks();

  }
  public getTasks(): void {
    this.service.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
       
        console.log(this.tasks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public remove(Id: number): void {
    this.service.deleteTask(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getTasks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
