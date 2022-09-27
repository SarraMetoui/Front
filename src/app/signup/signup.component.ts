import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AppState, selectAuthState } from '../../app/store/app.states';
import { SignUp } from '../../app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }
  onSubmit(): void {
    console.log(this.user);
    const payload = {
      email: this.user.email,
      password: this.user.password,
      name : this.user.name
    };
    this.store.dispatch(new SignUp(payload));
    console.log(this.user);
  }
}
