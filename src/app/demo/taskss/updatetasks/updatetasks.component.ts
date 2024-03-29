import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-updatetasks',
  templateUrl: './updatetasks.component.html',
  styleUrls: ['./updatetasks.component.scss']
})
export class UpdatetasksComponent implements OnInit {
  alert: boolean=false;
  form= new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl(''),
    progress: new FormControl(''),
    priority: new FormControl(''),
    time: new FormControl(''),
    duration: new FormControl(''),
   
  })
  constructor(private location: Location, private service: TaskService, private router: ActivatedRoute) { }

  ngOnInit(): void { console.log(this.router.snapshot.params.id);
    console.log(this.service.getCurrentData(this.router.snapshot.params.id));

    this.service.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.form= new FormGroup({
        name: new FormControl(result[0][0]['name']),
        description: new FormControl(result[0][0]['description']),
        status: new FormControl(result[0][0]['status']),
        date: new FormControl(result[0][0]['date']),
        progress: new FormControl(result[0][0]['progress']),
        priority: new FormControl(result[0][0]['priority']),
        time: new FormControl(result[0][0]['time']),
        duration: new FormControl(result[0][0]['duration'])


      })
    })
  }
 
  
  Update()
  {
    this.service.updateTask(this.router.snapshot.params.id, this.form.value).subscribe((result)=>
    {
     console.log(result, 'task updated successfuly!');
     this.alert=true;
    })

  }

  closeAlert()
  {
    this.alert=false;
  }
  goBack(): void {
    this.location.back();
  }

}
