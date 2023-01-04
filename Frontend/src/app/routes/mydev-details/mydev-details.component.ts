import { Component, OnInit } from '@angular/core';
import { DevsService } from 'src/app/services/devs.service';
import { Dev } from 'src/app/models/devs.model';
import { UsdevscontrolService } from 'src/app/services/usdevscontrol.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mydev-details',
  templateUrl: './mydev-details.component.html',
  styleUrls: ['./mydev-details.component.css'],
})
export class MydevDetailsComponent implements OnInit {
  constructor(
    public devService: DevsService,
    public devvalidator: UsdevscontrolService
  ) {}

  ngOnInit(): void {
    let url_params = new URLSearchParams(window.location.search);
    let devId = url_params.get('devId');
    this.getDevDetails(devId || '');
  }

  getDevDetails(id: string) {
    console.log(id);
    let response = this.devService.getDevDetail(id);
    response.subscribe((res: any) => {
      this.devService.devs = res;
    });
  }
  createDev(form: NgForm) {
    console.log(form.value); //{datos del formulario}
    if (form.value._id) {
      this.updateDev(form.value);
      return;
    }
    delete form.value._id;

    let { name, description } = form.value;

    if (!name || !description) return alert('Diligencie todos los campos');

    this.devService.createDev(form.value).subscribe((res) => {
      this.getDevs();
      Swal.fire(
        'Dev guardado exitosamente',
        'Preciona ok para continuar',
        'success'
      );
      this.devService.currentDev = new Dev();
    });
  }

  deleteDev(id: string) {
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
        this.devService.deleteDev(id).subscribe((res: any) => {
          this.getDevs();
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
    this.devService.updateDev(data._id, data).subscribe((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title:
          'Los cambios han sido guardados, vuelva a iniciar sesion para verlos',
        showConfirmButton: false,
        timer: 3000,
      });
      this.devvalidator.logOut();
      this.devService.currentDev = new Dev();
    });
  }

  fillForm(dev: Dev) {
    this.devService.currentDev = dev;
  }
  getDevs() {
    let response = this.devService.getDevs();
    response.subscribe((res: any) => {
      this.devService.devs = res;
      console.log(this.devService.devs);
    });
  }
}
