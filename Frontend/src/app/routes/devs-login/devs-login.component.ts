import { Component, OnInit } from '@angular/core';
import { UsdevscontrolService } from 'src/app/services/usdevscontrol.service';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2';
import { NavigationError } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-devs-login',
  templateUrl: './devs-login.component.html',
  styleUrls: ['./devs-login.component.css']
})
export class DevsLoginComponent  {

  email: string = '';
  password: string = '';

  constructor(
    public devsService: UsdevscontrolService,
    public router: Router
  ) {}
  login() {
    const dev = { email: this.email, password: this.password };
    this.devsService.login(dev).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.router.navigateByUrl('/allusers');
        this.devsService.decodeToken();
        console.log(this.devsService.decodeToken());
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: error.error,
          text: 'Something went wrong!',
        });
      }
    );
  }

 

}
