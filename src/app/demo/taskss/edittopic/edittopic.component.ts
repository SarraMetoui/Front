import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TopicService } from 'src/app/services/topic.service';

@Component({
  selector: 'app-edittopic',
  templateUrl: './edittopic.component.html',
  styleUrls: ['./edittopic.component.scss']
})
export class EdittopicComponent implements OnInit {
  alert: boolean=false;
  form= new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    date: new FormControl(''),
    privacy: new FormControl(''),
    
   
  })
  constructor(private location: Location, private service: TopicService, private router: ActivatedRoute) { }

  ngOnInit(): void { console.log(this.router.snapshot.params.id);
    console.log(this.service.getCurrentData(this.router.snapshot.params.id));

    this.service.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.form= new FormGroup({
        name: new FormControl(result[0][0]['name']),
        description: new FormControl(result[0][0]['description']),
        status: new FormControl(result[0][0]['status']),
        date: new FormControl(result[0][0]['date']),
        privacy: new FormControl(result[0][0]['privacy'])
       

      })
    })
  }
 
  
  Update()
  {
    this.service.updateTopic(this.router.snapshot.params.id, this.form.value).subscribe((result)=>
    {
     console.log(result, 'Topic updated successfuly!');
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

