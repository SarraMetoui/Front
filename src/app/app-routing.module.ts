import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import {  CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LandingLayoutComponent } from './shared/components/layouts/landing-layout/landing-layout.component';
import { PagesModule } from './views/pages/pages.module';
import { PagesRoutingModule } from './views/pages/pages-routing.module';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutComponent } from './views/pages/about/about.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashDefaultComponent } from './demo/dashboard/dash-default/dash-default.component';
import { UserspageComponent } from './demo/pages/userslist/userspage/userspage.component';

const routes: Routes = [
  
  
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./demo//users/users.module').then(module => module.UsersModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./demo//projects/projects.module').then(module => module.ProjectsModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./demo/taskss/taskss.module').then(module => module.TaskssModule)
      }
    ]
  }
 
  // {
  //   path:'users',
  //   component:UserspageComponent
  // },
  // {
  //   path:'Dashboard',
  //   component:AdminLayoutComponent
  // },
  // {
  //   path:'admin',
  //   component:UserLayoutComponent
  // },
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
  // {
  //   path:'about',
  //   component:AboutComponent
  // },
  // {
  //   path:'hello',
  //   component: LandingLayoutComponent,
  //   children: [
  //     {
  //       path: 'hello',
  //       loadChildren:() => import('./views/pages/pages.module').then(m => m.PagesModule)}
  //   ]
  // },
   
  // { path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule) },
     
  // {
  //   path: '',
  //   redirectTo: 'landing',
  //   pathMatch: 'full'
  // },
 
  
  // { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
 
  
  
  
  // { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
 
  
  // { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
 
  
  // { path: 'status', loadChildren: () => import('./status/status.module').then(m => m.StatusModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
