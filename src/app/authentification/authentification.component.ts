import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AppState, selectAuthState} from '../../app/store/app.states';
import { LogIn } from '../../app/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;


  constructor( private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
   }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
    
  };
  onSubmit(): void { const payload = {
    email: this.user.email,
    password: this.user.password
  };
  this.store.dispatch(new LogIn(payload));
  console.log(this.user);
  }

}
