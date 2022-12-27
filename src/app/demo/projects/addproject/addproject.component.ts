import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  
   form:FormGroup

  constructor( private service: ProjectsService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required), 
      status: new FormControl('', [Validators.required]), 
      date: new FormControl('', [Validators.required]), 
      deadline: new FormControl('', [Validators.required]), 
      department: new FormControl('', [Validators.required]), 
      phase: new FormControl('', [Validators.required]), 
      client: new FormControl('', [Validators.required]), 
      manager: new FormControl('', [Validators.required]), 
      progress: new FormControl('', [Validators.required]), 
      priority: new FormControl('', [Validators.required]), 
      version: new FormControl('', [Validators.required]),
    });
  }
  // submitted()
  // {
  //   console.log(this.form.value); 
  //   this.service.addProject(this.form.value).subscribe(res=>
  //     {
  //       console.log('You have added a new project successfully');
  //       this.router.navigateByUrl('projects'); 
  //     }
  //     )
  // }

  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.service.addProject(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('projects');
    })
  }
}

