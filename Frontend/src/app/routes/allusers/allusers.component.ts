import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css'],
})
export class AllusersComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    let response = this.usersService.getUsers();
    response.subscribe((res: any) => {
      this.usersService.users = res.data;
     
    });
  }
  getUserBylow100() {
    let response = this.usersService.getUsers();
    response.subscribe((res: any) => {
      this.usersService.users = res.data.filter((user: any) => user.range === '-100$');
      console.log(res)
      console.log(this.usersService.users);
    });
  }
  getUserBy100Y500() {
    let response = this.usersService.getUsers();+
    response.subscribe((res: any) => {
      this.usersService.users = res.data.filter((user: any) => user.range === '100$ - 500$');
      console.log(res)
      console.log(this.usersService.users);
    });
  }
  getUserBy500Y1000() {
    let response = this.usersService.getUsers();
    response.subscribe((res: any) => {
      this.usersService.users = res.data.filter((user: any) => user.range === '500$  - 1.000$');
      console.log(res)
      console.log(this.usersService.users);
    });
  }
  getUserByMore1000() {
    let response = this.usersService.getUsers();
    response.subscribe((res: any) => {
      this.usersService.users = res.data.filter((user: any) => user.range === '+1.000');
      console.log(res)
      console.log(this.usersService.users);
    });
  }
}
