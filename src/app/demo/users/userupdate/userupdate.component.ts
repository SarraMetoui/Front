import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.scss']
})
export class UserupdateComponent implements OnInit {
  alert: boolean=false;
  form= new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private router: ActivatedRoute, private service: UsersServiceService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    console.log(this.service.getCurrentData(this.router.snapshot.params.id));

    this.service.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.form= new FormGroup({
        name: new FormControl(result[0][0]['name']),
        email: new FormControl(result[0][0]['email'])
      })
    })
  }

    UpdateUser()
    {
      this.service.updateUsers(this.router.snapshot.params.id, this.form.value).subscribe((result)=>
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


