import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-projectupdate',
  templateUrl: './projectupdate.component.html',
  styleUrls: ['./projectupdate.component.scss']
})
export class ProjectupdateComponent implements OnInit {
  alert: boolean=false;
  form= new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    department: new FormControl(''),
    phase: new FormControl(''),
    client: new FormControl(''),
    manager: new FormControl(''),
    date: new FormControl(''),
    deadline: new FormControl(''), 
    progress: new FormControl(''),
    priority: new FormControl(''),
    version: new FormControl(''),

  })
  constructor(private service: ProjectsService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params.id);
    console.log(this.service.getCurrentData(this.router.snapshot.params.id));

    this.service.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.form= new FormGroup({
        name: new FormControl(result[0][0]['name']),
        description: new FormControl(result[0][0]['description']),
        client: new FormControl(result[0][0]['client']),
        manager: new FormControl(result[0][0]['manager']),
        status: new FormControl(result[0][0]['status']),
        phase: new FormControl(result[0][0]['phase']),
        department: new FormControl(result[0][0]['department']),
        date: new FormControl(result[0][0]['date']),
        deadline: new FormControl(result[0][0]['deadline']), 
        progress: new FormControl(result[0][0]['progress']),
        priority: new FormControl(result[0][0]['priority']),
        version: new FormControl(result[0][0]['version'])


      })
    })
  }
 
  
  Update()
  {
    this.service.updateProjects(this.router.snapshot.params.id, this.form.value).subscribe((result)=>
    {
     console.log(result, 'data updated successfuly!');
     this.alert=true;
    })

  }

  closeAlert()
  {
    this.alert=false;
  }

}
