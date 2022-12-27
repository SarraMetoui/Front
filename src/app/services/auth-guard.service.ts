import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router
  ) {}
  canActivate(): boolean {
    
    
      let Role = localStorage.getItem("role");
      if ( Role == "admin")
      { return true;
      }
      alert(" you dont have admin rights!")
      return false;
     
   
  }
}
