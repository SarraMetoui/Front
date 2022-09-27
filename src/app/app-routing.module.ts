import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import {  CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
 
  
  { path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },
  
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
 
  
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
 
  
  { path: 'projectmanager', loadChildren: () => import('./projectmanager/projectmanager.module').then(m => m.ProjectmanagerModule) },
 
  
  { path: 'rhmember', loadChildren: () => import('./rhmember/rhmember.module').then(m => m.RhmemberModule) },
 
  
  { path: 'teammember', loadChildren: () => import('./teammember/teammember.module').then(m => m.TeammemberModule) },
 
  
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
 
  
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
 
  
  { path: 'status', loadChildren: () => import('./status/status.module').then(m => m.StatusModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
