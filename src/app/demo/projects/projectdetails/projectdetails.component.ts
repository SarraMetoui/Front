import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {

  constructor(private service: ProjectsService, private router: ActivatedRoute) { }
   data:any;
   id:any; 
 
  ngOnInit(): void {

    console.log(this.router.snapshot.params.id);
     this.id= this.router.snapshot.params.id; 
     this.getDetails();

  }

  getDetails()
  {
   this.service.getCurrentData(this.id).subscribe(data=>
    {  
        this.data=data[0][0];
        console.log(this.data)
    }
   )
  }
}
