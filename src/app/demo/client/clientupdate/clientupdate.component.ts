import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-clientupdate',
  templateUrl: './clientupdate.component.html',
  styleUrls: ['./clientupdate.component.scss']
})
export class ClientupdateComponent implements OnInit {
  alert: boolean=false;
  form= new FormGroup({
    name: new FormControl(''), 
    manager: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private location: Location, private router: ActivatedRoute, private service: ClientService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    console.log(this.service.getCurrentData(this.router.snapshot.params.id));

    this.service.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.form= new FormGroup({
        name: new FormControl(result[0][0]['name']),
        manager: new FormControl(result[0][0]['manager']),
        email: new FormControl(result[0][0]['email']),
        number: new FormControl(result[0][0]['number']),
        address: new FormControl(result[0][0]['address'])
      })
    })
  }
  UpdateUser()
  {
    this.service.updateClient(this.router.snapshot.params.id, this.form.value).subscribe((result)=>
    {
     console.log(result, 'data updated successfuly!');
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

