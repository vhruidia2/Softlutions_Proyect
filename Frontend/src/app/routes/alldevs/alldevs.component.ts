import { Component, OnInit } from '@angular/core';
import { DevsService } from 'src/app/services/devs.service';
import { Dev } from 'src/app/models/devs.model';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alldevs',
  templateUrl: './alldevs.component.html',
  styleUrls: ['./alldevs.component.css'],
})
export class AlldevsComponent implements OnInit {
  constructor(public devsService: DevsService) {}

  ngOnInit(): void {
    this.getDevs();
  }
  getDevs() {
    let response = this.devsService.getDevs();
    response.subscribe((res: any) => {
      this.devsService.devs = res.data;
      console.log(this.devsService.devs);
    });
  }
  getDevsByBackDev() {
    let response = this.devsService.getDevs();
    response.subscribe((res: any) => {
      this.devsService.devs = res.data.filter((dev: any) => dev.devType === 'Back');
      console.log(res)
      console.log(this.devsService.devs);
    });
  }
  getDevsByFrontDev() {
    let response = this.devsService.getDevs();
    response.subscribe((res: any) => {
      this.devsService.devs = res.data.filter((dev: any) => dev.devType === 'Front');
      console.log(res)
      console.log(this.devsService.devs);
    });
  }
  getDevsByAsesorDev() {
    let response = this.devsService.getDevs();
    response.subscribe((res: any) => {
      this.devsService.devs = res.data.filter((dev: any) => dev.devType === 'Asesor');
      console.log(res)
      console.log(this.devsService.devs);
    });
  }
}
