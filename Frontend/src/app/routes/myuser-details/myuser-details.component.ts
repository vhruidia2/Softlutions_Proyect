import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';
import { UsdevscontrolService } from 'src/app/services/usdevscontrol.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-myuser-details',
  templateUrl: './myuser-details.component.html',
  styleUrls: ['./myuser-details.component.css']
})
export class MyuserDetailsComponent implements OnInit {

  constructor( public userService:UsersService, public devvalidator: UsdevscontrolService) { }

  ngOnInit(): void {
    let url_params = new URLSearchParams(window.location.search)
    let userId = url_params.get("userId")
    this.getUserDetails(userId || '')
  }

  getUserDetails(id:string){
    console.log(id)
    let response = this.userService.getUserDetail(id)
    response.subscribe((res:any)=>{
      this.userService.users = res
     
    })
  }
  createUser(form: NgForm) {
    console.log(form.value); //{datos del formulario}
    if (form.value._id) {
      this.updateUser(form.value);
      return;
    }
    delete form.value._id;

    let { name, description } = form.value;

    if (!name || !description) return alert('Diligencie todos los campos');

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
          'Los cambios han sido guardados, vuelva a iniciar sesion para verlos',
        showConfirmButton: false,
        timer: 3000,
      });
      this.devvalidator.logOut();
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
