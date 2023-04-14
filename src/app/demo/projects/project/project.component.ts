import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { UsersServiceService } from 'src/app/services/users-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/projects';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private service: ProjectsService) { }
  id_count: any; 
  nbProjects: any;
  // active: any; 
  // nbActive: any;
  // completed: any; 
  // nbCompleted: any;
  public projects: Project[];
  public editPromotion: Project;
  public deletePromotion: Project;
  ngOnInit(): void {
    this.getProjects();
    this.getNbProjects();

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
    for (const p of this.projects) {
      if (
       p.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(p);
      }
    }
    this.projects = results;
    if (results.length === 0 || !key) {
      this.getProjects();
    }
  }

  public getNbProjects(): void {
    this.service.getNbProjects().subscribe(
      (response: any) => {
        
        this.nbProjects= response[0][0];
        console.log(response[0][0]);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  // public getActive(): void {
  //   this.service.getActive().subscribe(
  //     (response: any) => {
        
  //       this.nbActive= response[0][0];
  //       console.log(response[0][0]);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public getCompleted(): void {
  //   this.service.getCompleted().subscribe(
  //     (response: any) => {
        
  //       this.nbCompleted= response[0][0];
  //       console.log(response[0][0]);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
  public onAddPromotion(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.service.addProject(addForm.value).subscribe(
      (response: Project) => {
        console.log(response);
        this.getProjects();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
}
