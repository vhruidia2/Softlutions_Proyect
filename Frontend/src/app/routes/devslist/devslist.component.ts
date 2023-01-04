import { Component, OnInit } from '@angular/core';
import { DevsService } from 'src/app/services/devs.service';
import { Dev } from 'src/app/models/devs.model';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-devslist',
  templateUrl: './devslist.component.html',
  styleUrls: ['./devslist.component.css']
})
export class DevslistComponent implements OnInit {

  constructor( public devService:DevsService) { }

  ngOnInit(): void {
    this.getDevs();
  }
  createDev(form: NgForm) {
    console.log(form.value); //{datos del formulario}
    if (form.value._id) {
      this.updateDev(form.value);
      return;
    }
    delete form.value._id;

    let { firtsName, email } = form.value;

    if (!firtsName || !email) return alert('Diligencie todos los campos');

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
          'Los cambios han sido guardados.',
        showConfirmButton: false,
        timer: 3000,
      });
      
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
