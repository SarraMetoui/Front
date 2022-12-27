import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable } from "rxjs";
import { UsersServiceService } from 'src/app/services/users-service.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.scss']
})
export class UserspageComponent implements OnInit {
  // users: any;
  // id:number;
  public users: User[];
  public editPromotion: User;
  public deletePromotion: User;
  constructor(private service: UsersServiceService) { }

  ngOnInit(): void {
    
    this.getUsers();
  }
  

   public getUsers(): void {
    this.service.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public remove(promotionId: number): void {
    this.service.deleteuser(promotionId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public updateUsers(users: User): void {
  //   this.service.updateUsers(users).subscribe(
  //     (response: User) => {
  //       console.log(response);
  //       this.getUsers();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
}

