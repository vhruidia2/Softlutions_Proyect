import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users.model';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(public userService:UsersService) { }

  ngOnInit(): void {
    this.getUser();
  }
  createUser(form: NgForm) {
    console.log(form.value); //{datos del formulario}
    if (form.value._id) {
      this.updateUser(form.value);
      return;
    }
    delete form.value._id;

    let { firtsName, lastName} = form.value;

    if (!firtsName || !lastName) return alert('Diligencie todos los campos');

    this.userService.createUser(form.value).subscribe((res) => {
      this.getUser();
      Swal.fire(
        'Dev guardado exitosamente',
        'Preciona ok para continuar',
        'success'
      );
      this.userService.currentUser = new User();
    });
  }

  deleteUser(id: string) {
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
        this.userService.deleteUser(id).subscribe((res: any) => {
          this.getUser();
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
    this.userService.updateUser(data._id, data).subscribe((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title:
          'Los cambios han sido guardados',
        showConfirmButton: false,
        timer: 3000,
      });
  
      this.userService.currentUser = new User();
    });
  }

  fillForm(user: User) {
    this.userService.currentUser = user;
  }
  getUser() {
    let response = this.userService.getUsers();
    response.subscribe((res: any) => {
      this.userService.users = res;
      console.log(this.userService.users);
    });
  }

}
