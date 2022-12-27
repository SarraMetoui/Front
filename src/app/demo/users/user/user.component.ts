import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable } from "rxjs";
import { UsersServiceService } from 'src/app/services/users-service.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service: UsersServiceService) { }
  public users: User[];
  public editPromotion: User;
  public deletePromotion: User;
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

  // public update(users: User): void {
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
