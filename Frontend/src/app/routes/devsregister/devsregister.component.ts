import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import { Data } from '@angular/router';
import { Dev } from 'src/app/models/devs.model';
import { DevsService } from 'src/app/services/devs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-devsregister',
  templateUrl: './devsregister.component.html',
  styleUrls: ['./devsregister.component.css'],
})
export class DevsregisterComponent implements OnInit {
  constructor(public devsService: DevsService) {}

  ngOnInit(): void {}
  getAllDevs() {
    let response = this.devsService.getDevs();
    response.subscribe((res) => {
      this.devsService.devs = res;
      console.log(this.devsService.devs);
    });
  }

  createDevs(form: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.updateDev(form.value);
      return;
    }
    delete form.value._id;

    let {
      firtsName,
      lastName,
      email,
      password,
      cc,
      age,
      numberPhone,
      devType,
      tecno,
      proyects,
      experience,
    } = form.value;
    if (
      !firtsName ||
      !lastName ||
      !email ||
      !password ||
      !cc ||
      !age ||
      !numberPhone ||
      !tecno ||
      !proyects ||
      !experience
    )
      return alert('Llena todos los campos');

    let createdev = this.devsService.createDev(form.value).subscribe(
      (res) => {
        this.getAllDevs();
        alert(res);
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

  delDev(id: string) {
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
        this.devsService.deleteDev(id).subscribe((res: any) => {
          this.getAllDevs();
        });

        Swal.fire(
          'Borrado',
          'El elemento ha sido borrado exitsoamente',
          'success'
        );
      }
    });
  }

  updateDev(data: Dev) {
    this.devsService.updateDev(data._id, data).subscribe((res) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      this.getAllDevs();
      this.devsService.currentDev = new Dev();
    });
  }
  fillFormDev(dev: Dev) {
    this.devsService.currentDev = dev;
  }

  /* !!! END DEVS SERVICES !!! */
}
