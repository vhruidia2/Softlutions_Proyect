import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindevGuard } from './guards/admindev.guard';
import { AdminuserGuard } from './guards/adminuser.guard';
import { UserGuard } from './guards/users.guard';
import { AlldevsComponent } from './routes/alldevs/alldevs.component';
import { AllusersComponent } from './routes/allusers/allusers.component';
import { AsesoriasComponent } from './routes/asesorias/asesorias.component';
import { ContactanosComponent } from './routes/contactanos/contactanos.component';
import { DevsBackComponent } from './routes/devs-back/devs-back.component';
import { DevsDetailComponent } from './routes/devs-detail/devs-detail.component';
import { DevsFrontComponent } from './routes/devs-front/devs-front.component';
import { DevsLoginComponent } from './routes/devs-login/devs-login.component';
import { DevslistComponent } from './routes/devslist/devslist.component';
import { DevsregisterComponent } from './routes/devsregister/devsregister.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { MydevDetailsComponent } from './routes/mydev-details/mydev-details.component';
import { MyuserDetailsComponent } from './routes/myuser-details/myuser-details.component';
import { Page404Component } from './routes/page404/page404.component';
import { SignupComponent } from './routes/signup/signup.component';
import { UsersDetailComponent } from './routes/users-detail/users-detail.component';
import { UsersLoginComponent } from './routes/users-login/users-login.component';
import { UserslistComponent } from './routes/userslist/userslist.component';
import { UsersregisterComponent } from './routes/usersregister/usersregister.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'devs-front', component: DevsFrontComponent, canActivate:[UserGuard] },
  { path: 'devs-back', component: DevsBackComponent, canActivate:[UserGuard] },
  { path: 'asesorias', component: AsesoriasComponent , canActivate:[UserGuard]},
  { path: 'users-register', component: UsersregisterComponent },
  { path: 'devs-register', component: DevsregisterComponent },
  { path: 'alldevs', component: AlldevsComponent , canActivate:[UserGuard]},
  { path: 'allusers', component: AllusersComponent , canActivate:[UserGuard]},
  { path: 'user-details', component: UsersDetailComponent , canActivate:[UserGuard] },
  { path: 'dev-details', component: DevsDetailComponent , canActivate:[UserGuard]},
  {path:'MyDev-details', component:MydevDetailsComponent, canActivate:[UserGuard]},
  {path:'MyUser-details', component:MyuserDetailsComponent, canActivate:[UserGuard]},
  { path: 'devs-login', component: DevsLoginComponent },
  { path: 'users-login', component: UsersLoginComponent },
  {path:'users-list',component:UserslistComponent, canActivate:[UserGuard], canActivateChild:[AdminuserGuard]},
  {path:'devs-list',component:DevslistComponent, canActivate:[UserGuard], canActivateChild:[AdmindevGuard]},
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
