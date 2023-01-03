import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/projects';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private service: ProjectsService,private servicetwo: TaskService ) { }
  public projects: Project[];
  public tasks: Task[];

  ngOnInit(): void {
    this.getProjects();
    this.getTasks();
  }
  public getProjects(): void {
    this.service.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
        console.log(this.projects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getTasks(): void {
    this.servicetwo.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
        console.log(this.tasks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
}
