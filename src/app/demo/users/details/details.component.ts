import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  absences: number;
  vacations: number;
  data:any;
  id:any; 
  alert: boolean=false;
  constructor(private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient,
    private service: UsersServiceService,  private router: ActivatedRoute
  ) { }

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
  goBack(): void {
    this.location.back();
  }
  updateAbsences(newAbsences: number) {
    this.absences = newAbsences;
    this.data.absent ++;
  }
  updatevacations(newVacations: number) {
    this.vacations = newVacations;
    this.data.vacation ++;
  }
  alerts()
  {
    this.alert=true;

  }
  closeAlert()
  {
    this.alert=false;
  }
  sendEmail() {
    this.http.post('http://localhost:3000/api/send-email', {}).subscribe();
  }
  sendEmail2() {
    this.http.post('http://localhost:3000/api/send-email2', {}).subscribe();
  }
}
