import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiskService } from 'src/app/services/risk.service';

@Component({
  selector: 'app-detailrisk',
  templateUrl: './detailrisk.component.html',
  styleUrls: ['./detailrisk.component.scss']
})
export class DetailriskComponent implements OnInit {

  constructor(private service: RiskService, private router: ActivatedRoute) { }
  id:any; 
  data:any;

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
       
    }
   )
  }
}
