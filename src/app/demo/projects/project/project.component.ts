import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UsersServiceService } from 'src/app/services/users-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/projects';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private service: ProjectsService) { }
  public projects: Project[];
  public editPromotion: Project;
  public deletePromotion: Project;
  ngOnInit(): void {
    this.getProjects();
  

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

  public remove(Id: number): void {
    this.service.deleteproject(Id).subscribe(
      (response: void) => {
        console.log(response);
        this.getProjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public search(key: string): void {
    console.log(key);
    const results: Project[] = [];
    for (const promotion of this.projects) {
      if (
       promotion.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(promotion);
      }
    }
    this.projects = results;
    if (results.length === 0 || !key) {
      this.getProjects();
    }
  }
}
