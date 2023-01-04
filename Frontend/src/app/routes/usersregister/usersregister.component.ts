import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model';
import { NgForm } from '@angular/forms';
import { last, range } from 'rxjs';
import { Data,  } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usersregister',
  templateUrl: './usersregister.component.html',
  styleUrls: ['./usersregister.component.css'],
})
export class UsersregisterComponent implements OnInit {
  constructor(public usersService: UsersService, public router: Router) {}

  ngOnInit(): void {}
  getAllUsers() {
    let response = this.usersService.getUsers();
    response.subscribe((res) => {
      this.usersService.users = res;
      console.log(this.usersService.users);
    });
  }

  createUsers(form: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.updateUser(form.value);
      return;
    }
    delete form.value._id;

    let { firtsName, lastName, email, password, cc, age, numberPhone,description } =
      form.value;
    if (
      !firtsName ||
      !lastName ||
      !email ||
      !password ||
      !cc ||
      !age ||
      !numberPhone ||
      !description ||
      !range
    )
      return alert('Llena todos los campos');

    let createuser = this.usersService.createUser(form.value).subscribe(
      (res) => {
        alert(res);
        console.log(res)
        this.router.navigateByUrl('/users-register');
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

  delUser(id: string) {
    Swal.fire({
      title: 'Estas seguro de eliminar el elemento?',
      text: 'Esta accion no se podra deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(id).subscribe((res: any) => {
          this.getAllUsers();
        });

        Swal.fire(
          'Borrado',
          'El elemento ha sido borrado exitsoamente',
          'success'
        );
      }
    });
  }

  updateUser(data: User) {
    this.usersService.updateUser(data._id, data).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.getAllUsers();
      this.usersService.currentUser = new User();
    });
  }
  fillForm(user: User) {
    this.usersService.currentUser = user;
  }
}
