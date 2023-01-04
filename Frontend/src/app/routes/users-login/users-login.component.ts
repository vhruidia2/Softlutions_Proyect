import { Component, OnInit } from '@angular/core';
import { UsuserscontrolService } from 'src/app/services/ususerscontrol.service';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2';
import { NavigationError } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css'],
})
export class UsersLoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    public userService: UsuserscontrolService,
    public router: Router
  ) {}
  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.router.navigateByUrl('/alldevs');
        this.userService.decodeToken();
        console.log(this.userService.decodeToken());
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
